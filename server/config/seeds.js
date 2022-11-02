const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Ferns' },
    { name: 'Catci' },
    { name: 'Succulants' },
    { name: 'Bulbs' },
    { name: 'Climbers' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Maidenhair Fern',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'fern.jpg',
      category: categories[0]._id,
      price: 22.99,
      quantity: 30
    },
    {
      name: 'Boston Fern',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'boston.jpg',
      category: categories[0]._id,
      price: 20.00,
      quantity: 9
    },
    {
      name: 'Spider Plant',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: 'spider.jpg',
      category: categories[0]._id,
      price: 4.99,
      quantity: 50
    },
    {
      name: 'Fairy Castle Cactus',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'castle.jpg',
      price: 7.99,
      quantity: 10
    },
    {
      name: 'Paddle Cactus',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'paddle.jpg',
      price: 14.99,
      quantity: 5
    },
    {
      name: 'Bunny Ear Cactus',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'bunny.jpg',
      price: 9.99,
      quantity: 15
    },
    {
      name: 'Snake Plant',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'snake.jpg',
      price: 9.99,
      quantity: 30
    },
    {
      name: 'String of Pearls',
      category: categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'pearls.jpg',
      price: 39.99,
      quantity: 10
    },
    {
      name: 'Zebra Cactus',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'zebra.jpg',
      price: 9.99,
      quantity: 3
    },
    {
      name: 'Rubber Plant',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'rubber.jpg',
      price: 19.99,
      quantity: 19
    },
    {
      name: 'Prayer Plant',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'prayer.jpg',
      price: 14.99,
      quantity: 40
    },
    {
      name: 'Golden Pothos',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'potho.jpg',
      price: 24.99,
      quantity: 100
    },
    {
      name: 'Monstera',
      category: categories[4]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'monstera.jpg',
      price: 99.99,
      quantity: 30
    },
    {
      name: 'Chinese Money Tree',
      category: categories[4]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'chinese.jpg',
      price: 19.99,
      quantity: 20
    },
    {
      name: 'Pepper Face',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'pepper.jpg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'String of hearts',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'hearts.jpg',
      price: 9.99,
      quantity: 18
    },
    {
      name: 'Fiddle Fig',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'fig.jpg',
      price: 29.99,
      quantity: 60
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
