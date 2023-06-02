// import { Test, TestingModule } from '@nestjs/testing';
// import { IntentionController } from './intention.controller';
// import { IntentionService } from './intention.service';
// import { describe } from 'node:test';
// import { User } from '@prisma/client';

// describe('IntentionController', () => {
//   let intentionController: IntentionController;
//   let intentionService: IntentionService;
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [IntentionController],
//       providers: [IntentionService],
//     }).compile();

//     intentionController = module.get<IntentionController>(IntentionController);
//     intentionService = module.get<IntentionService>(IntentionService);
//   });

//   describe('create', () => {
//     it('should create a new intention', async () => {
//       //arr
//       const createIntentionDto = {
//         name: 'John Doe',
//         status: 'pending',
//         address: {
//           street: '123 Example Street',
//           number: '456',
//           postcode: '12345',
//           complement: 'Apartment 789',
//         },
//         intentionProduct: [
//           {
//             productId: 1,
//             title: 'Product 1',
//             price: 10.99,
//             category: 'Category 1',
//             description: 'Description 1',
//             image: 'image1.jpg',
//           },
//         ],
//       };
//       const createdIntention = {
//         name: 'John Doe',
//         status: 'pending',
//         address: {
//           id: 1,
//           street: 'Example Street',
//           number: '123',
//           postcode: '12345',
//           complement: 'Apartment 456',
//         },
//         intentionProduct: [
//           {
//             id: 1,
//             productId: 1,
//             title: 'Product 1',
//             price: 10.99,
//             category: 'Category 1',
//             description: 'Description 1',
//             image: 'image1.jpg',
//           },
//           // ... other intention products
//         ],
//       };

//       jest
//         .spyOn(intentionService, 'create')
//         .mockResolvedValue(createdIntention);
//       // Act
//       const result = await intentionController.create(createIntentionDto);
//       // Assert
//       expect(intentionService.create).toHaveBeenCalledWith(createIntentionDto);
//       expect(result).toEqual(createdIntention);
//     });
//   });
// });
