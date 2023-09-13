import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';

@Injectable()
export class ProductService {
  private readonly logger: Logger = new Logger();

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getProducts(): Promise<any> {
    try {
      return await this.productModel.insertMany([
        {
          "_id": "64fd75f32c01433485f7b314",
          "title": "Классический бургер",
          "img": "https://i.postimg.cc/mrJ5S650/image.jpg",
          "description": "Сочный классический бургер с говяжьей котлетой, свежими овощами и специальным соусом. Этот бургер - настоящая классика фаст-фуда, он приносит удовольствие каждому грызнувшему в него зуб. Со своим сочным мясом, хрустящими овощами и неповторимым вкусом, он всегда пользуется популярностью у наших клиентов.",
          "compound": [
            "Говяжья котлета",
            "Салат",
            "Помидор",
            "Лук",
            "Сыр",
            "Соус"
          ],
          "weight": "200 г",
          "calories": "350 калорий",
          "price": 1200,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b315",
          "title": "Вегетарианский бургер",
          "img": "https://i.postimg.cc/CKTh6JXf/Vegetarian-burger.jpg",
          "description": "Здоровый вегетарианский бургер с овощами и вегетарианской котлетой. Этот бургер - отличный выбор для вегетарианцев и всех, кто ценит свежие овощи и нежную текстуру. С майонезом и авокадо он придает яркий вкус вашему обеду.",
          "compound": [
            "Вегетарианская котлета",
            "Салат",
            "Авокадо",
            "Томат",
            "Лук",
            "Майонез"
          ],
          "weight": "180 г",
          "calories": "280 калорий",
          "price": 1000,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b316",
          "title": "Бургер с курицей",
          "img": "https://i.postimg.cc/mryPY0kr/image.jpg",
          "description": "Аппетитный бургер с куриной котлетой, свежими овощами и нежным сыром. Отличный выбор для любителей куриного мяса и сочных бургеров. Вкус, который вы запомните!",
          "compound": [
            "Куриная котлета",
            "Салат",
            "Помидор",
            "Лук",
            "Сыр",
            "Майонез"
          ],
          "weight": "180 г",
          "calories": "320 калорий",
          "price": 1100,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b317",
          "title": "Чизбургер",
          "img": "https://i.postimg.cc/fRwyw8Bn/image.jpg",
          "description": "Сочный чизбургер с говяжьей котлетой, ломтиком сыра и специальным соусом. Этот бургер стал символом нашей закусочной. Вкус сыра и сочной котлеты порадует каждого.",
          "compound": [
            "Говяжья котлета",
            "Салат",
            "Сыр",
            "Лук",
            "Соус"
          ],
          "weight": "210 г",
          "calories": "380 калорий",
          "price": 1300,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b318",
          "title": "Сырный бургер",
          "img": "https://i.postimg.cc/tgWM2zGJ/image.jpg",
          "description": "Сырный бургер с двойной порцией сыра, говяжьей котлетой и специальным соусом. Если вы любите сыр, то этот бургер - ваш выбор. Вкус сыра будет преследовать вас!",
          "compound": [
            "Говяжья котлета",
            "Салат",
            "Двойная порция сыра",
            "Лук",
            "Соус"
          ],
          "weight": "220 г",
          "calories": "420 калорий",
          "price": 1400,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b319",
          "title": "Бургер с беконом",
          "img": "https://i.postimg.cc/BQy4js50/image.jpg",
          "description": "Пикантный бургер с говяжьей котлетой, хрустящим беконом и специальным барбекю-соусом. Этот бургер придется по вкусу ценителям бекона и незабываемых вкусов.",
          "compound": [
            "Говяжья котлета",
            "Салат",
            "Бекон",
            "Лук",
            "Барбекю-соус"
          ],
          "weight": "210 г",
          "calories": "380 калорий",
          "price": 1350,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31a",
          "title": "Бургер с острым соусом",
          "img": "https://i.postimg.cc/jdWCgMZR/image.jpg",
          "description": "Острый бургер с говяжьей котлетой, смесью перцев и острым соусом. Для тех, кто ищет острые ощущения и настоящий вкус.",
          "compound": [
            "Говяжья котлета",
            "Салат",
            "Перцы",
            "Лук",
            "Острый соус"
          ],
          "weight": "200 г",
          "calories": "360 калорий",
          "price": 1250,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31b",
          "title": "Бургер с рыбой",
          "img": "https://i.postimg.cc/5tWhdtJs/image.jpg",
          "description": "Легкий и вкусный бургер с рыбным филе, свежим салатом и тартар-соусом. Отличный выбор для тех, кто предпочитает рыбу.",
          "compound": [
            "Рыбное филе",
            "Салат",
            "Помидор",
            "Лук",
            "Тартар-соус"
          ],
          "weight": "180 г",
          "calories": "290 калорий",
          "price": 1050,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31c",
          "title": "Двойной бургер",
          "img": "https://i.postimg.cc/CKKQVntH/image.jpg",
          "description": "Большой двойной бургер с двумя говяжьими котлетами, сыром и специальным соусом. Отличный выбор для большого аппетита и настоящих гурманов.",
          "compound": [
            "Две говяжьи котлеты",
            "Салат",
            "Сыр",
            "Лук",
            "Соус"
          ],
          "weight": "300 г",
          "calories": "550 калорий",
          "price": 1800,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31d",
          "title": "Бургер Хот-дог",
          "img": "https://i.postimg.cc/Wp7Ytnv6/image.jpg",
          "description": "Необычный бургер в стиле хот-дога с куриной котлетой, маринованными огурцами и горчичным соусом. Отличный выбор для любителей хот-догов и бургеров одновременно.",
          "compound": [
            "Куриная котлета",
            "Салат",
            "Маринованные огурцы",
            "Горчичный соус"
          ],
          "weight": "190 г",
          "calories": "320 калорий",
          "price": 1150,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31e",
          "title": "Бургер Детский",
          "img": "https://i.postimg.cc/QxJqfxtQ/image.jpg",
          "description": "Специальный бургер для наших маленьких гостей. Мягкая котлетка, салат и майонез - все, что нужно детям для хорошего обеда.",
          "compound": [
            "Мягкая котлетка",
            "Салат",
            "Майонез"
          ],
          "weight": "150 г",
          "calories": "250 калорий",
          "price": 900,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd75f32c01433485f7b31f",
          "title": "Бургер Завтрак",
          "img": "https://i.postimg.cc/cJR1njTL/image.jpg",
          "description": "Плотный бургер с яичницей, беконом и сыром. Идеальный выбор для начала дня и заполнения энергии.",
          "compound": [
            "Яичница",
            "Бекон",
            "Сыр"
          ],
          "weight": "220 г",
          "calories": "420 калорий",
          "price": 1300,
          "available": true,
          "category_id": 1
        },
        {
          "_id": "64fd91fbfdcafbe489271fc5",
          "title": "Начос",
          "img": "https://i.postimg.cc/13rgKT54/image.jpg",
          "description": "Пикантные начос с соусом сальса и сырным соусом. Идеальная закуска для вечеринки или просмотра фильма.",
          "compound": [
            "Пикантные начос",
            "Соус сальса",
            "Сырный соус"
          ],
          "weight": "150 г",
          "calories": "230 калорий",
          "price": 350,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fc6",
          "title": "Картошка фри",
          "img": "https://i.postimg.cc/RhZGMfsL/image.jpg",
          "description": "Золотистая картошка фри, поджаренная до хрустящей корки. Отличное дополнение к бургеру или хот-догу.",
          "compound": [
            "Золотистая картошка фри"
          ],
          "weight": "200 г",
          "calories": "300 калорий",
          "price": 250,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fc7",
          "title": "Луковые кольца",
          "img": "https://i.postimg.cc/x1pX7mMS/image.jpg",
          "description": "Хрустящие луковые кольца в панировке. Отличная закуска для ценителей лука.",
          "compound": [
            "Луковые кольца"
          ],
          "weight": "180 г",
          "calories": "250 калорий",
          "price": 300,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fc8",
          "title": "Закуска \"Фирменная",
          "img": "https://i.postimg.cc/T3cn7hYV/image.jpg",
          "description": "Фирменная закуска с начос, картошкой фри и луковыми кольцами. Сделана по особому рецепту нашего шеф-повара.",
          "compound": [
            "Пикантные начос",
            "Золотистая картошка фри",
            "Луковые кольца"
          ],
          "weight": "220 г",
          "calories": "350 калорий",
          "price": 450,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fc9",
          "title": "Закуска Острая",
          "img": "https://i.postimg.cc/rpnnHfFN/image.jpg",
          "description": "Острая закуска с чили-перцем, начос и соусом сальса. Для любителей острых ощущений.",
          "compound": [
            "Чили-перец",
            "Пикантные начос",
            "Соус сальса"
          ],
          "weight": "180 г",
          "calories": "280 калорий",
          "price": 400,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fca",
          "title": "Закуска Морская",
          "img": "https://i.postimg.cc/FHPVF759/image.jpg",
          "description": "Закуска с креветками, кальмарами и соусом тар-тар. Идеальное сочетание морепродуктов.",
          "compound": [
            "Креветки",
            "Кальмары",
            "Соус тар-тар"
          ],
          "weight": "200 г",
          "calories": "320 калорий",
          "price": 500,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fcb",
          "title": "Закуска \"Фруктовая\"",
          "img": "https://i.postimg.cc/jSCJXcmb/image.jpg",
          "description": "Закуска с фруктами, сыром и медовым соусом. Освежающее и вкусное сочетание.",
          "compound": [
            "Фрукты",
            "Сыр",
            "Медовый соус"
          ],
          "weight": "170 г",
          "calories": "210 калорий",
          "price": 350,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fcc",
          "title": "Закуска \"Овощная\"",
          "img": "https://i.postimg.cc/prGL5b2n/image.jpg",
          "description": "Закуска с свежими овощами и сметанно-зеленьным соусом. Для ценителей овощей.",
          "compound": [
            "Свежие овощи",
            "Сметанно-зеленьный соус"
          ],
          "weight": "160 г",
          "calories": "180 калорий",
          "price": 300,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fcd",
          "title": "Закуска \"Сырная\"",
          "img": "https://i.postimg.cc/cHKSkgZ6/image.jpg",
          "description": "Закуска с ассорти сыров и виноградом. Роскошное сочетание сыра и фруктов.",
          "compound": [
            "Ассорти сыров",
            "Виноград"
          ],
          "weight": "190 г",
          "calories": "290 калорий",
          "price": 450,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fce",
          "title": "Закуска \"Острые вкусы\"",
          "img": "https://i.postimg.cc/3xwbZM3x/image.jpg",
          "description": "Острая закуска с перцем чили, орехами и соусом сальса. Для тех, кто любит остроту.",
          "compound": [
            "Перец чили",
            "Орехи",
            "Соус сальса"
          ],
          "weight": "170 г",
          "calories": "270 калорий",
          "price": 400,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fcf",
          "title": "Закуска \"Фасолька\"",
          "img": "https://i.postimg.cc/qRpK8rdm/image.jpg",
          "description": "Закуска с маринованной фасолью и свежими овощами. Богатый и полезный вариант закуски.",
          "compound": [
            "Маринованная фасоль",
            "Свежие овощи"
          ],
          "weight": "180 г",
          "calories": "240 калорий",
          "price": 350,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd91fbfdcafbe489271fd0",
          "title": "Закуска \"Карибская\"",
          "img": "https://i.postimg.cc/jSzCv1cB/image.jpg",
          "description": "Закуска с экзотическими фруктами и соусом \"Карибский\". Путешествие на острова прямо на вашем столе.",
          "compound": [
            "Экзотические фрукты",
            "Соус \"Карибский\""
          ],
          "weight": "190 г",
          "calories": "260 калорий",
          "price": 400,
          "available": true,
          "category_id": 2
        },
        {
          "_id": "64fd95fda0660e153059ba05",
          "title": "Домашний хот-дог",
          "img": "https://i.postimg.cc/mg2Ytq93/image.jpg",
          "description": "Настоящий домашний хот-дог с куриной колбаской, свежими овощами и горчичным соусом. Идеальный выбор для тех, кто ценит домашний вкус.",
          "compound": [
            "Куриная колбаска",
            "Свежие овощи",
            "Горчичный соус"
          ],
          "weight": "180 г",
          "calories": "350 калорий",
          "price": 550,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba06",
          "title": "Жгучий хот-дог",
          "img": "https://i.postimg.cc/HnYx6GdB/image.jpg",
          "description": "Острый хот-дог с чили-перцем, пикантной колбаской и острой горчичной подливой. Для любителей острых ощущений.",
          "compound": [
            "Пикантная колбаска",
            "Чили-перец",
            "Острая горчичная подлива"
          ],
          "weight": "200 г",
          "calories": "420 калорий",
          "price": 600,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba07",
          "title": "Классический хот-дог",
          "img": "https://i.postimg.cc/G2qrh4nx/image.jpg",
          "description": "Самый классический хот-дог с куриной колбаской, кетчупом и майонезом. Вечный хит фаст-фуда.",
          "compound": [
            "Куриная колбаска",
            "Кетчуп",
            "Майонез"
          ],
          "weight": "150 г",
          "calories": "380 калорий",
          "price": 500,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba08",
          "title": "Хот-дог \"Американский\"",
          "img": "https://i.postimg.cc/FRMtK3nc/image.jpg",
          "description": "Американский хот-дог с франкфуртером, огурцами и луком. Попробуйте американский стиль!",
          "compound": [
            "Франкфуртер",
            "Огурцы",
            "Лук"
          ],
          "weight": "180 г",
          "calories": "410 калорий",
          "price": 580,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba09",
          "title": "Хот-дог \"Креветка\"",
          "img": "https://i.postimg.cc/9MGbG9Qy/image.jpg",
          "description": "Хот-дог с креветками и авокадо. Нежный и вкусный выбор для ценителей морепродуктов.",
          "compound": [
            "Креветки",
            "Авокадо"
          ],
          "weight": "200 г",
          "calories": "390 калорий",
          "price": 650,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0a",
          "title": "Хот-дог \"Чикаго\"",
          "img": "https://i.postimg.cc/m2hM4MWV/image.jpg",
          "description": "Сытный хот-дог по-чикагски с маринованными огурцами, томатами, луком и множеством соусов. Вкус Чикаго в каждом укусе.",
          "compound": [
            "Маринованные огурцы",
            "Томаты",
            "Лук",
            "Соусы"
          ],
          "weight": "220 г",
          "calories": "450 калорий",
          "price": 680,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0b",
          "title": "Хот-дог \"Мексиканский\"",
          "img": "https://i.postimg.cc/sfGQ0zY0/image.jpg",
          "description": "Мексиканский хот-дог с острыми перцами, гуакамоле и соусом сальса. Острые ощущения от Мексики.",
          "compound": [
            "Острые перцы",
            "Гуакамоле",
            "Соус сальса"
          ],
          "weight": "190 г",
          "calories": "430 калорий",
          "price": 620,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0c",
          "title": "Хот-дог \"Космический\"",
          "img": "https://i.postimg.cc/wBsYYwwH/image.jpg",
          "description": "Хот-дог в стиле космоса с необычными ингредиентами и фирменным соусом. Путешествие во вкусовое пространство.",
          "compound": [
            "Необычные ингредиенты",
            "Фирменный соус"
          ],
          "weight": "220 г",
          "calories": "480 калорий",
          "price": 700,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0d",
          "title": "Хот-дог \"Дабл-чиз\"",
          "img": "https://i.postimg.cc/MTdDPS1G/image.jpg",
          "description": "Хот-дог с двойной порцией сыра и франкфуртером. Для любителей сыра и насыщенных вкусов.",
          "compound": [
            "Двойная порция сыра",
            "Франкфуртер"
          ],
          "weight": "210 г",
          "calories": "420 калорий",
          "price": 670,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0e",
          "title": "Хот-дог \"Колбасный\"",
          "img": "https://i.postimg.cc/7hhpXXGp/image.jpg",
          "description": "Хот-дог с колбасой, горчицей и луком. Классический вкус с нашим видением.",
          "compound": [
            "Колбаса",
            "Горчица",
            "Лук"
          ],
          "weight": "170 г",
          "calories": "390 калорий",
          "price": 560,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba0f",
          "title": "Хот-дог \"Гриль\"",
          "img": "https://i.postimg.cc/WtLc3gzC/image.jpg",
          "description": "Хот-дог с гриль-колбасой, луком и барбекю-соусом. Настоящий вкус гриля в каждом укусе.",
          "compound": [
            "Гриль-колбаса",
            "Лук",
            "Барбекю-соус"
          ],
          "weight": "190 г",
          "calories": "410 калорий",
          "price": 640,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd95fda0660e153059ba10",
          "title": "Хот-дог \"Гонконг\"",
          "img": "https://i.postimg.cc/65yDsHj3/image.jpg",
          "description": "Хот-дог с азиатскими специями, маринованными огурцами и соусом из сои. Экзотика Гонконга в каждом бите.",
          "compound": [
            "Азиатские специи",
            "Маринованные огурцы",
            "Соус из сои"
          ],
          "weight": "200 г",
          "calories": "430 калорий",
          "price": 680,
          "available": true,
          "category_id": 3
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bce",
          "title": "Комбо \"Бургерное\"",
          "img": "https://i.postimg.cc/TYc153jF/image.jpg",
          "description": "Комбо, включающее классический бургер, картошку фри и прохладительный напиток. Идеальное сочетание для обеда или ужина.",
          "compound": [
            "Классический бургер",
            "Картошка фри",
            "Прохладительный напиток"
          ],
          "weight": "400 г",
          "calories": "750 калорий",
          "price": 1500,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bcf",
          "title": "Комбо \"Хот-договое\"",
          "img": "https://i.postimg.cc/9fYJvTy1/image.jpg",
          "description": "Комбо, включающее жгучий хот-дог, начос и газированный напиток. Острые ощущения в одной упаковке.",
          "compound": [
            "Жгучий хот-дог",
            "Начос",
            "Газированный напиток"
          ],
          "weight": "350 г",
          "calories": "640 калорий",
          "price": 1400,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd0",
          "title": "Комбо \"Вегетарианское\"",
          "img": "https://i.postimg.cc/15KfZ9vm/image.jpg",
          "description": "Комбо, включающее вегетарианский бургер, овощные закуски и фруктовый сок. Здоровый выбор для вегетарианцев.",
          "compound": [
            "Вегетарианский бургер",
            "Овощные закуски",
            "Фруктовый сок"
          ],
          "weight": "380 г",
          "calories": "520 калорий",
          "price": 1300,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd1",
          "title": "Комбо \"Фаст-фуд\"",
          "img": "https://i.postimg.cc/rFY243mG/image.jpg",
          "description": "Комбо, включающее чизбургер, картошку фри и молочный коктейль. Быстрое и вкусное питание в одной упаковке.",
          "compound": [
            "Чизбургер",
            "Картошка фри",
            "Молочный коктейль"
          ],
          "weight": "420 г",
          "calories": "880 калорий",
          "price": 1600,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd2",
          "title": "Комбо \"Семейное\"",
          "img": "https://i.postimg.cc/Bbj97B7P/image.jpg",
          "description": "Комбо, включающее двойной бургер, фри, салат и газированную воду. Идеальное решение для семейного обеда.",
          "compound": [
            "Двойной бургер",
            "Фри",
            "Салат",
            "Газированная вода"
          ],
          "weight": "550 г",
          "calories": "1090 калорий",
          "price": 2000,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd3",
          "title": "Комбо \"Закусочное\"",
          "img": "https://i.postimg.cc/Pxx5hZFT/image.jpg",
          "description": "Комбо, включающее начос, луковые кольца и сырные палочки. Закусочное наслаждение в одной упаковке.",
          "compound": [
            "Начос",
            "Луковые кольца",
            "Сырные палочки"
          ],
          "weight": "320 г",
          "calories": "810 калорий",
          "price": 1200,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd4",
          "title": "Комбо \"Пикник\"",
          "img": "https://i.postimg.cc/28pLdcKW/image.jpg",
          "description": "Комбо, включающее хот-дог \"Американский\", картофельные дольки и лимонад. Идеальный выбор для пикника на свежем воздухе.",
          "compound": [
            "Хот-дог \"Американский\"",
            "Картофельные дольки",
            "Лимонад"
          ],
          "weight": "460 г",
          "calories": "840 калорий",
          "price": 1700,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd5",
          "title": "Комбо \"Морепродукты\"",
          "img": "https://i.postimg.cc/W3gTsnwR/image.jpg",
          "description": "Комбо, включающее хот-дог \"Креветка\", закуску с креветками и лимонад. Полное наслаждение морепродуктами.",
          "compound": [
            "Хот-дог \"Креветка\"",
            "Закуска с креветками",
            "Лимонад"
          ],
          "weight": "430 г",
          "calories": "950 калорий",
          "price": 1800,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd6",
          "title": "Комбо \"Детское\"",
          "img": "https://i.postimg.cc/DZn4k81c/image.jpg",
          "description": "Комбо, включающее хот-дог \"Детский\", овощные палочки и фруктовый сок. Детское счастье в одной коробке.",
          "compound": [
            "Хот-дог \"Детский\"",
            "Овощные палочки",
            "Фруктовый сок"
          ],
          "weight": "300 г",
          "calories": "570 калорий",
          "price": 1000,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd7",
          "title": "Комбо \"Сырное\"",
          "img": "https://i.postimg.cc/mgVgz897/image.jpg",
          "description": "Комбо, включающее сырные палочки, бургер \"Сырный\" и молочный коктейль. Для настоящих ценителей сыра.",
          "compound": [
            "Сырные палочки",
            "Бургер \"Сырный\"",
            "Молочный коктейль"
          ],
          "weight": "380 г",
          "calories": "790 калорий",
          "price": 1600,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd8",
          "title": "Комбо \"Острые вкусы\"",
          "img": "https://i.postimg.cc/HntfZPd2/image.jpg",
          "description": "Комбо, включающее острый бургер, мексиканские роллы и острый сок. Для любителей острых вкусов.",
          "compound": [
            "Острый бургер",
            "Мексиканские роллы",
            "Острый сок"
          ],
          "weight": "450 г",
          "calories": "920 калорий",
          "price": 1700,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fd9dc5f8194c2ec9e50bd9",
          "title": "Комбо \"Завтрак\"",
          "img": "https://i.postimg.cc/CKDrr64q/image.jpg",
          "description": "Комбо, включающее хот-дог \"Завтрак\", яичницу и кофе. Идеальное начало дня с нашим завтраком.",
          "compound": [
            "Хот-дог \"Завтрак\"",
            "Яичница",
            "Кофе"
          ],
          "weight": "340 г",
          "calories": "590 калорий",
          "price": 1300,
          "available": true,
          "category_id": 4
        },
        {
          "_id": "64fdd6dc8878634922e798de",
          "title": "Шаурма \"Курица\"",
          "img": "https://i.postimg.cc/sgZ18pGW/image.jpg",
          "description": "Шаурма с нежным курином мясом, свежими овощами и чесночным соусом. Классический вкус.",
          "compound": [
            "Куриное мясо",
            "Свежие овощи",
            "Чесночный соус"
          ],
          "weight": "250 г",
          "calories": "450",
          "price": 600,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798df",
          "title": "Шаурма \"Говядина\"",
          "img": "https://i.postimg.cc/B6brYCX9/image.jpg",
          "description": "Шаурма с нежной говядиной, луком и перцем. Ароматное мясо и приправы.",
          "compound": [
            "Говядина",
            "Лук",
            "Перец"
          ],
          "weight": "280 г",
          "calories": "520",
          "price": 650,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e0",
          "title": "Шаурма \"Острая\"",
          "img": "https://i.postimg.cc/XYVyz26z/image.jpg",
          "description": "Острая шаурма с маринованным мясом, халапеньо и соусом сальса. Для любителей пикантных блюд.",
          "compound": [
            "Маринованное мясо",
            "Халапеньо",
            "Соус сальса"
          ],
          "weight": "270 г",
          "calories": "480",
          "price": 680,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e1",
          "title": "Шаурма \"Вегетарианская\"",
          "img": "https://i.postimg.cc/qR0fsC3y/image.jpg",
          "description": "Вегетарианская шаурма с овощами и соусом \"Тахини\". Здоровый и сытный выбор.",
          "compound": [
            "Свежие овощи",
            "Соус \"Тахини\""
          ],
          "weight": "240 г",
          "calories": "360",
          "price": 550,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e2",
          "title": "Шаурма \"Фалафель\"",
          "img": "https://i.postimg.cc/T164M89b/image.jpg",
          "description": "Шаурма с фалафелем, салатом и соусом \"Хумус\". Вегетарианская альтернатива мясной шаурме.",
          "compound": [
            "Фалафель",
            "Салат",
            "Соус \"Хумус\""
          ],
          "weight": "230 г",
          "calories": "400",
          "price": 580,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e3",
          "title": "Шаурма \"Морепродукты\"",
          "img": "https://i.postimg.cc/wMJ8dcLt/image.jpg",
          "description": "Шаурма с морепродуктами, овощами и соусом \"Тар-тар\". Наслаждение морскими вкусами.",
          "compound": [
            "Морепродукты",
            "Свежие овощи",
            "Соус \"Тар-тар\""
          ],
          "weight": "260 г",
          "calories": "580",
          "price": 700,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e4",
          "title": "Шаурма \"Мексиканская\"",
          "img": "https://i.postimg.cc/T2cJt5ZQ/image.jpg",
          "description": "Мексиканская шаурма с острой начинкой, овощами и соусом \"Гуакамоле\". Острые латиноамериканские вкусы.",
          "compound": [
            "Острая начинка",
            "Свежие овощи",
            "Соус \"Гуакамоле\""
          ],
          "weight": "280 г",
          "calories": "540",
          "price": 680,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e5",
          "title": "Шаурма \"Турецкая\"",
          "img": "https://i.postimg.cc/cCDY0wWS/image.jpg",
          "description": "Турецкая шаурма с мясом баранины, лавашом и соусом \"Тахини\". Вкус Турции в каждом укусе.",
          "compound": [
            "Баранина",
            "Лаваш",
            "Соус \"Тахини\""
          ],
          "weight": "260 г",
          "calories": "510",
          "price": 620,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e6",
          "title": "Шаурма \"Азиатская\"",
          "img": "asian_shawarma.jpg",
          "description": "Азиатская шаурма с куриной грудкой, овощами и соусом \"Соевый\". Восточные ароматы.",
          "compound": [
            "Куринная грудка",
            "Свежие овощи",
            "Соус \"Соевый\""
          ],
          "weight": "250 г",
          "calories": "470",
          "price": 650,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e7",
          "title": "Шаурма \"Итальянская\"",
          "img": "italian_shawarma.jpg",
          "description": "Итальянская шаурма с итальянскими специями, сыром и соусом \"Песто\". Вкус Италии на вашем столе.",
          "compound": [
            "Итальянские специи",
            "Сыр",
            "Соус \"Песто\""
          ],
          "weight": "270 г",
          "calories": "490",
          "price": 680,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e8",
          "title": "Шаурма \"Сырная\"",
          "img": "cheese_shawarma.jpg",
          "description": "Шаурма с мясом, сыром и соусом \"Барбекю\". Для любителей сыра и насыщенных вкусов.",
          "compound": [
            "Сыр",
            "Соус \"Барбекю\""
          ],
          "weight": "250 г",
          "calories": "520",
          "price": 650,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6dc8878634922e798e9",
          "title": "Шаурма \"Дабл-мит\"",
          "img": "double_meat_shawarma.jpg",
          "description": "Шаурма с двойной порцией мяса и соусом \"Митболь\". Для настоящих ценителей мяса.",
          "compound": [
            "Двойная порция мяса",
            "Соус \"Митболь\""
          ],
          "weight": "300 г",
          "calories": "620",
          "price": 750,
          "available": true,
          "category_id": 5
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3af",
          "title": "Пицца \"Маргарита\"",
          "img": "margherita_pizza.jpg",
          "description": "Классическая пицца \"Маргарита\" с томатным соусом, моцареллой и базиликом. Просто и вкусно.",
          "compound": [
            "Томатный соус",
            "Моцарелла",
            "Базилик"
          ],
          "weight": "350 г",
          "calories": "600 калорий",
          "price": 700,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b0",
          "title": "Пицца \"Пепперони\"",
          "img": "pepperoni_pizza.jpg",
          "description": "Пицца \"Пепперони\" с острой колбасой, томатным соусом и моцареллой. Для любителей пикантных вкусов.",
          "compound": [
            "Томатный соус",
            "Пепперони",
            "Моцарелла"
          ],
          "weight": "380 г",
          "calories": "680 калорий",
          "price": 750,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b1",
          "title": "Пицца \"Гавайская\"",
          "img": "hawaiian_pizza.jpg",
          "description": "Пицца \"Гавайская\" с ветчиной, ананасами, томатным соусом и моцареллой. Сладко-соленая вкуснятина.",
          "compound": [
            "Томатный соус",
            "Ветчина",
            "Ананасы",
            "Моцарелла"
          ],
          "weight": "400 г",
          "calories": "720 калорий",
          "price": 780,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b2",
          "title": "Пицца \"Мексиканская\"",
          "img": "mexican_pizza.jpg",
          "description": "Мексиканская пицца с говядиной, острой начинкой, томатным соусом и моцареллой. Ароматная и острая.",
          "compound": [
            "Томатный соус",
            "Говядина",
            "Острая начинка",
            "Моцарелла"
          ],
          "weight": "420 г",
          "calories": "760 калорий",
          "price": 800,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b3",
          "title": "Пицца \"Вегетарианская\"",
          "img": "vegetarian_pizza.jpg",
          "description": "Вегетарианская пицца с овощами, грибами, томатным соусом и моцареллой. Здоровый и вкусный выбор.",
          "compound": [
            "Томатный соус",
            "Овощи",
            "Грибы",
            "Моцарелла"
          ],
          "weight": "370 г",
          "calories": "670 калорий",
          "price": 750,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b4",
          "title": "Пицца \"Морская\"",
          "img": "seafood_pizza.jpg",
          "description": "Пицца \"Морская\" с морепродуктами, томатным соусом и моцареллой. Вкус моря на вашем столе.",
          "compound": [
            "Томатный соус",
            "Морепродукты",
            "Моцарелла"
          ],
          "weight": "400 г",
          "calories": "720 калорий",
          "price": 780,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b5",
          "title": "Пицца \"Четыре сыра\"",
          "img": "four_cheese_pizza.jpg",
          "description": "Пицца \"Четыре сыра\" с моцареллой, пармезаном, горгонзолой и дор-блю. Для любителей сыра.",
          "compound": [
            "Моцарелла",
            "Пармезан",
            "Горгонзола",
            "Дор-блю"
          ],
          "weight": "360 г",
          "calories": "680 калорий",
          "price": 760,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b6",
          "title": "Пицца \"Барбекю\"",
          "img": "barbecue_pizza.jpg",
          "description": "Пицца \"Барбекю\" с куриной грудкой, соусом \"Барбекю\" и моцареллой. Аромат в каждом укусе.",
          "compound": [
            "Соус \"Барбекю\"",
            "Куринная грудка",
            "Моцарелла"
          ],
          "weight": "380 г",
          "calories": "710 калорий",
          "price": 770,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b7",
          "title": "Пицца \"Грибная\"",
          "img": "mushroom_pizza.jpg",
          "description": "Пицца \"Грибная\" с грибами, томатным соусом и моцареллой. Ароматные грибы и нежный сыр.",
          "compound": [
            "Томатный соус",
            "Грибы",
            "Моцарелла"
          ],
          "weight": "360 г",
          "calories": "670 калорий",
          "price": 750,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b8",
          "title": "Пицца \"Карбонара\"",
          "img": "carbonara_pizza.jpg",
          "description": "Пицца \"Карбонара\" с беконом, яйцом, пармезаном и моцареллой. Вкусная и сытная.",
          "compound": [
            "Бекон",
            "Яйцо",
            "Пармезан",
            "Моцарелла"
          ],
          "weight": "370 г",
          "calories": "690 калорий",
          "price": 760,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3b9",
          "title": "Пицца \"Супер мясная\"",
          "img": "super_meat_pizza.jpg",
          "description": "Пицца \"Супер мясная\" с ветчиной, пепперони, колбаской и моцареллой. Для ценителей мяса.",
          "compound": [
            "Ветчина",
            "Пепперони",
            "Колбаска",
            "Моцарелла"
          ],
          "weight": "400 г",
          "calories": "740 калорий",
          "price": 790,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd6fcbb5ff5cc7f63b3ba",
          "title": "Пицца \"Аррива\"",
          "img": "arriva_pizza.jpg",
          "description": "Пицца \"Аррива\" с креветками, мидиями, морскими водорослями и моцареллой. Специальное предложение от шеф-повара.",
          "compound": [
            "Креветки",
            "Мидии",
            "Морские водоросли",
            "Моцарелла"
          ],
          "weight": "420 г",
          "calories": "760 калорий",
          "price": 800,
          "available": true,
          "category_id": 6
        },
        {
          "_id": "64fdd718484b0f636827760c",
          "title": "Чизкейк \"Нью-Йорк\"",
          "img": "new_york_cheesecake.jpg",
          "description": "Нежный чизкейк \"Нью-Йорк\" с ванильным вкусом и соусом из малины. Идеальное дополнение к кофе.",
          "compound": [
            "Ванильный чизкейк",
            "Соус из малины"
          ],
          "weight": "150 г",
          "calories": "320 калорий",
          "price": 450,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f636827760d",
          "title": "Тирамису",
          "img": "tiramisu.jpg",
          "description": "Классическое тирамису с маскарпоне, савоярди и кофе. Идеальное завершение ужина.",
          "compound": [
            "Маскарпоне",
            "Савоярди",
            "Кофе"
          ],
          "weight": "180 г",
          "calories": "380 калорий",
          "price": 480,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f636827760e",
          "title": "Панна-котта",
          "img": "panna_cotta.jpg",
          "description": "Панна-котта с ванильным ароматом и клубничным соусом. Нежное удовольствие.",
          "compound": [
            "Ванильная панна-котта",
            "Клубничный соус"
          ],
          "weight": "160 г",
          "calories": "280 калорий",
          "price": 470,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f636827760f",
          "title": "Шоколадное маффин",
          "img": "chocolate_muffin.jpg",
          "description": "Шоколадное маффин с кусочками шоколада. Идеальное угощение для любителей шоколада.",
          "compound": [
            "Шоколадное тесто",
            "Кусочки шоколада"
          ],
          "weight": "120 г",
          "calories": "420 калорий",
          "price": 350,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277610",
          "title": "Эклеры",
          "img": "eclairs.jpg",
          "description": "Эклеры с заварным кремом и глазурью. Нежное и вкусное удовольствие.",
          "compound": [
            "Заварное тесто",
            "Крем",
            "Глазурь"
          ],
          "weight": "140 г",
          "calories": "320 калорий",
          "price": 380,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277611",
          "title": "Фруктовый плов",
          "img": "fruit_pilaf.jpg",
          "description": "Фруктовый плов с сухофруктами и орехами. Десерт с восточными нотками.",
          "compound": [
            "Сухофрукты",
            "Орехи"
          ],
          "weight": "170 г",
          "calories": "290 калорий",
          "price": 420,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277612",
          "title": "Пирожное \"Три шоколада\"",
          "img": "triple_chocolate_pastry.jpg",
          "description": "Пирожное \"Три шоколада\" с молочным, горьким и белым шоколадом. Идеальное угощение для любителей шоколада.",
          "compound": [
            "Молочный шоколад",
            "Горький шоколад",
            "Белый шоколад"
          ],
          "weight": "160 г",
          "calories": "450 калорий",
          "price": 460,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277613",
          "title": "Клубничное мороженое",
          "img": "strawberry_ice_cream.jpg",
          "description": "Клубничное мороженое с кусочками клубники. Освежающее летнее удовольствие.",
          "compound": [
            "Клубничное мороженое",
            "Кусочки клубники"
          ],
          "weight": "160 г",
          "calories": "220 калорий",
          "price": 380,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277614",
          "title": "Черничный чизкейк",
          "img": "blueberry_cheesecake.jpg",
          "description": "Черничный чизкейк с ванильным вкусом и соусом из черники. Освежающее летнее удовольствие.",
          "compound": [
            "Ванильный чизкейк",
            "Соус из черники"
          ],
          "weight": "150 г",
          "calories": "330 калорий",
          "price": 460,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277615",
          "title": "Карамельный брауни",
          "img": "caramel_brownie.jpg",
          "description": "Карамельный брауни с карамельными вкраплениями. Насладитесь сладким вкусом карамели.",
          "compound": [
            "Карамельный брауни",
            "Карамельные вкрапления"
          ],
          "weight": "140 г",
          "calories": "380 калорий",
          "price": 420,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277616",
          "title": "Пирожное \"Тирамису\"",
          "img": "tiramisu_pie.jpg",
          "description": "Пирожное \"Тирамису\" с маскарпоне, савоярди и кофейным вкусом. Наслаждение кофейными нотками.",
          "compound": [
            "Маскарпоне",
            "Савоярди",
            "Кофейный вкус"
          ],
          "weight": "160 г",
          "calories": "340 калорий",
          "price": 450,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd718484b0f6368277617",
          "title": "Ягодный чизкейк",
          "img": "berry_cheesecake.jpg",
          "description": "Ягодный чизкейк с ванильным вкусом и свежими ягодами. Освежающее и сладкое удовольствие.",
          "compound": [
            "Ванильный чизкейк",
            "Свежие ягоды"
          ],
          "weight": "160 г",
          "calories": "290 калорий",
          "price": 460,
          "available": true,
          "category_id": 7
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee3d",
          "title": "Соус \"Барбекю\"",
          "img": "barbecue_sauce.jpg",
          "description": "Соус \"Барбекю\" с томатной основой и дымным ароматом. Идеальное дополнение к гриль-блюдам.",
          "compound": [
            "Томатная основа",
            "Дымный аромат"
          ],
          "weight": "150 г",
          "calories": "60 калорий",
          "price": 200,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee3e",
          "title": "Соус \"Сальса\"",
          "img": "salsa_sauce.jpg",
          "description": "Соус \"Сальса\" с острой начинкой и свежими овощами. Освежающий и пикантный.",
          "compound": [
            "Острая начинка",
            "Свежие овощи"
          ],
          "weight": "120 г",
          "calories": "30 калорий",
          "price": 180,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee3f",
          "title": "Соус \"Гуакамоле\"",
          "img": "guacamole_sauce.jpg",
          "description": "Соус \"Гуакамоле\" с авокадо и специями. Идеальное дополнение к мексиканской кухне.",
          "compound": [
            "Авокадо",
            "Специи"
          ],
          "weight": "130 г",
          "calories": "70 калорий",
          "price": 220,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee40",
          "title": "Соус \"Тахини\"",
          "img": "tahini_sauce.jpg",
          "description": "Соус \"Тахини\" с кунжутным маслом и чесноком. Популярный соус в ближневосточной кухне.",
          "compound": [
            "Кунжутное масло",
            "Чеснок"
          ],
          "weight": "140 г",
          "calories": "90 калорий",
          "price": 210,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee41",
          "title": "Соус \"Тартар\"",
          "img": "tartar_sauce.jpg",
          "description": "Соус \"Тартар\" с маринованными огурцами и луком. Отличное дополнение к рыбным блюдам.",
          "compound": [
            "Маринованные огурцы",
            "Лук"
          ],
          "weight": "140 г",
          "calories": "80 калорий",
          "price": 220,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee42",
          "title": "Соус \"Соевый\"",
          "img": "soy_sauce.jpg",
          "description": "Соус \"Соевый\" с традиционным вкусом и ароматом. Незаменимый приправа в азиатской кухне.",
          "compound": [
            "Соевый соус"
          ],
          "weight": "120 г",
          "calories": "25 калорий",
          "price": 180,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee43",
          "title": "Соус \"Карибский\"",
          "img": "caribbean_sauce.jpg",
          "description": "Соус \"Карибский\" с экзотическими специями и фруктовыми нотками. Вкус островов на вашем столе.",
          "compound": [
            "Экзотические специи",
            "Фруктовые нотки"
          ],
          "weight": "130 г",
          "calories": "50 калорий",
          "price": 220,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee44",
          "title": "Соус \"Митболь\"",
          "img": "meatball_sauce.jpg",
          "description": "Соус \"Митболь\" с мясным вкусом и ароматом. Отличное дополнение к мясным блюдам.",
          "compound": [
            "Мясный вкус"
          ],
          "weight": "140 г",
          "calories": "70 калорий",
          "price": 210,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee45",
          "title": "Соус \"Медово-горчичный\"",
          "img": "honey_mustard_sauce.jpg",
          "description": "Соус \"Медово-горчичный\" с медом и горчицей. Сладко-острое удовольствие.",
          "compound": [
            "Мед",
            "Горчица"
          ],
          "weight": "130 г",
          "calories": "60 калорий",
          "price": 220,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee46",
          "title": "Соус \"Альфредо\"",
          "img": "alfredo_sauce.jpg",
          "description": "Соус \"Альфредо\" с сливками и пармезаном. Идеальное дополнение к пасте и ризотто.",
          "compound": [
            "Сливки",
            "Пармезан"
          ],
          "weight": "140 г",
          "calories": "120 калорий",
          "price": 230,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee47",
          "title": "Соус \"Хот\"",
          "img": "hot_sauce.jpg",
          "description": "Соус \"Хот\" с острым перцем и приправами. Для любителей острых блюд.",
          "compound": [
            "Острый перец",
            "Приправы"
          ],
          "weight": "120 г",
          "calories": "40 калорий",
          "price": 200,
          "available": true,
          "category_id": 8
        },
        {
          "_id": "64fdd72b0d5cc7061c3dee48",
          "title": "Соус \"Сладкий чили\"",
          "img": "sweet_chili_sauce.jpg",
          "description": "Соус \"Сладкий чили\" с острым и сладким вкусом. Отличное дополнение к азиатским блюдам.",
          "compound": [
            "Острый и сладкий вкус"
          ],
          "weight": "130 г",
          "calories": "50 калорий",
          "price": 210,
          "available": true,
          "category_id": 8
        }
      ])
      return await this.productModel.find();
    } catch (e) {
      this.logger.log(e);
    }
  }

  async getCategoryProducts(category_id: string) {
    try {
      return await this.productModel.find({ category_id });
    } catch (e) {
      this.logger.log(e);
    }
  }
}
