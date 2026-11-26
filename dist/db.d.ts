import mongoose, { Schema } from 'mongoose';
export declare const UserModel: mongoose.Model<{
    userName?: string | null;
    age?: number | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    userName?: string | null;
    age?: number | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userName?: string | null;
    age?: number | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userName?: string | null;
    age?: number | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    userName?: string | null;
    age?: number | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    userName?: string | null;
    age?: number | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    userName?: string | null;
    age?: number | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    userName?: string | null;
    age?: number | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
export declare const ContentModel: mongoose.Model<{
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    title?: string | null;
    link?: string | null;
    tags: mongoose.Types.ObjectId[];
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
export declare const LinkModel: mongoose.Model<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    hash?: string | null;
    userId: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & Required<{
    _id: mongoose.Types.ObjectId;
}>>;
//# sourceMappingURL=db.d.ts.map