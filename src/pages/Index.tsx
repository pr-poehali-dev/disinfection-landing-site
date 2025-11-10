import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">СанЭксперт</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-gray-700 hover:text-primary transition-colors">Преимущества</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-accent hover:bg-accent/90">
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональная санитарная обработка
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Используем современный генератор холодного тумана для максимально эффективной дезинфекции помещений
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Заказать обработку
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Узнать цены
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-gray-600">объектов обработано</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-gray-600">работаем круглосуточно</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/d2e39b80-86e8-4f25-a125-4c70791c9e3f/files/0ab9eda5-c6fe-4f75-b923-a2115a55d893.jpg" 
                alt="Профессиональная дезинфекция"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="CheckCircle2" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold">100% безопасно</div>
                    <div className="text-sm text-gray-600">Для людей и животных</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Комплексные решения для защиты вашего помещения</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Droplets" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дезинфекция</h3>
              <p className="text-gray-600 mb-4">
                Уничтожение вирусов, бактерий и микроорганизмов с помощью генератора холодного тумана
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Обработка офисов
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Квартиры и дома
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Торговые центры
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Wind" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Озонация</h3>
              <p className="text-gray-600 mb-4">
                Глубокая очистка воздуха и устранение неприятных запахов озоновой обработкой
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Удаление запахов
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Очистка воздуха
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Дезодорация
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Bug" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дезинсекция</h3>
              <p className="text-gray-600 mb-4">
                Эффективное уничтожение насекомых: тараканов, клопов, муравьев, комаров
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Тараканы и клопы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Муравьи и осы
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Комары и мошки
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent">
              <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Rat" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Дератизация</h3>
              <p className="text-gray-600 mb-4">
                Профессиональное уничтожение грызунов с гарантией результата
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Крысы и мыши
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Профилактика
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-accent" size={16} />
                  Барьерная защита
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-primary">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Waves" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Обработка от плесени</h3>
              <p className="text-gray-600 mb-4">
                Удаление плесени и грибка с применением специальных антисептиков
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Черная плесень
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Грибок в ванной
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={16} />
                  Профилактика
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 hover:border-accent bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Sparkles" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Комплексная обработка</h3>
              <p className="text-gray-600 mb-4">
                Полный спектр услуг со скидкой до 30% при комплексном заказе
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 mt-4">
                Получить скидку
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/d2e39b80-86e8-4f25-a125-4c70791c9e3f/files/83bf4018-7b7d-4535-a232-1bf9c054bc60.jpg" 
                alt="Генератор холодного тумана"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Генератор холодного тумана</h2>
              <p className="text-xl text-gray-600 mb-6">
                Современное оборудование для профессиональной дезинфекции. Мелкодисперсное распыление обеспечивает проникновение во все труднодоступные места.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <Icon name="Zap" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Быстрая обработка</div>
                    <div className="text-gray-600">Полная дезинфекция помещения за 30-60 минут</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <Icon name="Target" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">100% охват</div>
                    <div className="text-gray-600">Обработка всех поверхностей, включая труднодоступные места</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                    <Icon name="Leaf" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Безопасные средства</div>
                    <div className="text-gray-600">Сертифицированные препараты без вреда для здоровья</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">Почему выбирают именно нас</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Опыт 10+ лет</h3>
              <p className="text-gray-600">
                Профессиональная команда с сертификатами и многолетним опытом работы
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Работаем 24/7</h3>
              <p className="text-gray-600">
                Выезд специалиста в любое удобное время, включая выходные и праздники
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Гарантия результата</h3>
              <p className="text-gray-600">
                Официальный договор и гарантия качества на все виды услуг
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Banknote" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Выгодные цены</h3>
              <p className="text-gray-600">
                Прозрачное ценообразование и скидки на комплексные услуги до 30%
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Microscope" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Современное оборудование</h3>
              <p className="text-gray-600">
                Новейшие генераторы холодного тумана и сертифицированные препараты
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Users" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Квалифицированные специалисты</h3>
              <p className="text-gray-600">
                Обученный персонал с медицинскими книжками и допусками
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="FileText" className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Все документы</h3>
              <p className="text-gray-600">
                Акт выполненных работ и сертификаты для СЭС и Роспотребнадзора
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon name="Heart" className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Забота о клиентах</h3>
              <p className="text-gray-600">
                Бесплатные консультации и рекомендации по профилактике
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Готовы заказать обработку?</h2>
              <p className="text-xl mb-8 text-white/90">
                Оставьте заявку и получите бесплатную консультацию специалиста в течение 15 минут
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={20} />
                  <span className="text-lg">info@sanexpert.ru</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Gift" className="text-accent" size={32} />
                  <div>
                    <div className="font-bold text-lg mb-1">Специальное предложение</div>
                    <div className="text-white/90">При заказе комплексной обработки скидка 30% + бесплатная профилактика через месяц</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Заказать обработку</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-700">
                    <option>Выберите услугу</option>
                    <option>Дезинфекция</option>
                    <option>Озонация</option>
                    <option>Дезинсекция</option>
                    <option>Дератизация</option>
                    <option>Обработка от плесени</option>
                    <option>Комплексная обработка</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    placeholder="Комментарий" 
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-lg py-6">
                  Отправить заявку
                </Button>
                <p className="text-xs text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={32} />
                <span className="text-2xl font-bold">СанЭксперт</span>
              </div>
              <p className="text-gray-400">
                Профессиональные санитарные услуги с 2014 года
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Дезинфекция</li>
                <li>Озонация</li>
                <li>Дезинсекция</li>
                <li>Дератизация</li>
                <li>Обработка от плесени</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@sanexpert.ru</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Документы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Лицензии</li>
                <li>Сертификаты</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СанЭксперт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
