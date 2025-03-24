import { registerEnumType } from '@nestjs/graphql';

export enum ProductType {
	CHAIR = 'CHAIR',
	TABLE = 'TABLE',
	DRAWERS = 'DRAWERS',
    LIGHTS = 'LIGHTS',
	SOFA = 'SOFA',
	WARDROBE = 'WARDROBE',
}
registerEnumType(ProductType, {
	name: 'ProductType',
});

export enum ProductStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(ProductStatus, {
	name: 'ProductStatus',
});

export enum ProductSize {
	MEDIUM = 'MEDIUM',
    LARGE = 'LARGE',
}
registerEnumType(ProductSize, {
	name: 'ProductSize',
});

