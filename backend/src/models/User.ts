// import { type Model, model, Schema } from "mongoose";

// const addressSchema = new Schema({
//   city: String,
//   street: String,
//   zip: String,
// });

// interface IUser {
//   name: string;
//   age: number;
//   email: string;
//   role: string;
//   createdAt: Date;
//   updatedAt: Date;
//   bestFriend: { type: Schema.Types.ObjectId; ref: "User" };
//   address: {
//     city: string;
//     street: string;
//     zip: string;
//   };
//   hobbies: string[];
// }

// interface IUserMethods {
//   sayHi: () => void;
// }

// const userSchema = new Schema<IUser>({
//   name: String,
//   age: { type: Number, min: 18, max: 100 },
//   email: {
//     type: String,
//     required: true,
//     lower: true,
//     validator: {
//       validate: (v) => v % 2 === 0,
//       message: (props) => `${props.value} is not a valid object`,
//     },
//   },
//   role: String,
//   createdAt: { immutable: true, type: Date, default: () => Date.now() },
//   updatedAt: { type: Date, default: () => Date.now() },
//   bestFriend: { type: Schema.Types.ObjectId, ref: "User" },
//   address: addressSchema,
//   hobbies: [String],
// });

// // biome-ignore lint/complexity/noBannedTypes: <explanation>
// type UserModel = Model<IUser, Object, IUserMethods>;

// userSchema.methods.sayHi = function () {
//   console.log(`Hi, my name is ${this.name}`);
// };

// userSchema.statics.findByName = function (name: string) {
//   return this.where({ name: new RegExp(name, "i") });
// };

// userSchema.query.byName = function (name: string) {
//   return this.where({ name: new RegExp(name, "i") });
// }

// export const User = model<IUser, UserModel>("User", userSchema);

