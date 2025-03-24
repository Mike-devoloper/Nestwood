import { Schema } from 'mongoose';
import { ProductSize } from '../libs/enums/product.enum';


const OrderSchema = new Schema(
	{
		productId: {
			type: String,
			required: true
		},

		productName: {
			type: String,
			required: true,
		},

		size: {
			type: String,
            enum: ProductSize,
			default: ProductSize.MEDIUM
		},

		quantity: {
			type: Number,
			default: 0,
		},
        price: {
            type: Number,
            required: true
        },

		memberId: {
			type: Schema.Types.ObjectId,
			required: true,
		},
	},
	{ timestamps: true, collection: 'order' },
);

export default OrderSchema;
