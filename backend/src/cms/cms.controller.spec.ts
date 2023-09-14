import { Test, TestingModule } from '@nestjs/testing';
import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';

describe('CmsController', () => {
  let cmsController: CmsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CmsController],
      providers: [CmsService],
    }).compile();

    cmsController = app.get<CmsController>(CmsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cmsController.getMembers()).toBe('Hello Members!');
    });
  });
});
