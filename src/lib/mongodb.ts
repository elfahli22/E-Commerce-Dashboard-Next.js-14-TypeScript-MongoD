// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI!;

// if (!MONGODB_URI) {
//   throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
// }

// interface MongooseCache {
//   conn: typeof mongoose | null;
//   promise: Promise<typeof mongoose> | null;
// }

// declare global {
//   // eslint-disable-next-line no-var
//   var mongoose: MongooseCache | undefined;
// }

// const cached: MongooseCache = global.mongoose ?? { conn: null, promise: null };

// if (!global.mongoose) {
//   global.mongoose = cached;
// }

// export async function connectDB(): Promise<typeof mongoose> {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose
//       .connect(MONGODB_URI, {
//         bufferCommands: false,
//         maxPoolSize: 10,
//         serverSelectionTimeoutMS: 5000,
//         socketTimeoutMS: 45000,
//       })
//       .then((mongoose) => {
//         console.log("✅ MongoDB Connected");
//         return mongoose;
//       })
//       .catch((err) => {
//         cached.promise = null;
//         throw err;
//       });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }

// export default connectDB;
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose ?? {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;