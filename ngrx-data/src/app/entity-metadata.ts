import { POST_KEY } from '@shared/index';
import { EntityDataModuleConfig, EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    [POST_KEY]: {},
};

export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
};
