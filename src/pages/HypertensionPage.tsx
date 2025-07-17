
import { ArrowLeft, Heart, AlertTriangle, Info, BookOpen, Pill } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HypertensionPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className="text-health-600 hover:text-health-700">Главная</Link>
              <span className="text-gray-400">/</span>
              <Link to="/diseases" className="text-health-600 hover:text-health-700">Болезни и состояния</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Артериальная гипертензия</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4 mb-6">
              <Link to="/diseases" className="mt-1">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад к болезням
                </Button>
              </Link>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-red-50 text-red-700 p-3 rounded-lg">
                    <Heart className="h-6 w-6" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Артериальная гипертензия</h1>
                    <p className="text-gray-600">Высокое артериальное давление</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Badge variant="secondary">Сердечно-сосудистые заболевания</Badge>
                  <span>Затрагивает 30% взрослого населения</span>
                  <span>МКБ-10: I10-I15</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Сохранить
                </Button>
                <Button variant="outline" size="sm">
                  Поделиться
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-6 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-700">120/80</div>
                <div className="text-sm text-blue-600">Нормальное давление</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">140/90</div>
                <div className="text-sm text-orange-600">Порог гипертензии</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-700">30%</div>
                <div className="text-sm text-red-600">Распространенность</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-700">90%</div>
                <div className="text-sm text-green-600">Контролируется лечением</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Info className="h-5 w-5 text-health-600" />
                      Что такое артериальная гипертензия?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none">
                    <p>
                      Артериальная гипертензия (высокое кровяное давление) — это состояние, при котором 
                      давление крови на стенки артерий постоянно превышает нормальные показатели. 
                      Это одно из наиболее распространенных сердечно-сосудистых заболеваний в мире.
                    </p>
                    <p>
                      Артериальное давление измеряется двумя показателями: систолическим (верхнее число) 
                      и диастолическим (нижнее число). Нормальным считается давление ниже 120/80 мм рт. ст.
                    </p>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      Симптомы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Ранние симптомы:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Головные боли</li>
                          <li>• Головокружение</li>
                          <li>• Шум в ушах</li>
                          <li>• Усталость</li>
                          <li>• Нарушения сна</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-700">Поздние симптомы:</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• Одышка</li>
                          <li>• Боли в груди</li>
                          <li>• Нарушения зрения</li>
                          <li>• Отеки</li>
                          <li>• Носовые кровотечения</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Важно:</strong> Гипертензия часто протекает бессимптомно на ранних стадиях, 
                        поэтому регулярное измерение давления критически важно.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Causes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Причины и факторы риска</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Неизменяемые факторы:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Возраст (старше 45 лет для мужчин, 55 для женщин)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Наследственность
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Пол (мужчины в группе риска)
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            Этническая принадлежность
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Изменяемые факторы:</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Избыточный вес
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Курение
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Избыток соли в рационе
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Недостаток физической активности
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Стресс
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            Злоупотребление алкоголем
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="h-5 w-5 text-health-600" />
                      Лечение
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Немедикаментозное лечение:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h5 className="font-medium text-green-800 mb-2">Изменение образа жизни</h5>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Снижение веса</li>
                              <li>• Регулярные физические нагрузки</li>
                              <li>• Ограничение соли до 5г/день</li>
                              <li>• Отказ от курения</li>
                            </ul>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h5 className="font-medium text-blue-800 mb-2">Диета DASH</h5>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Больше фруктов и овощей</li>
                              <li>• Цельные злаки</li>
                              <li>• Нежирные молочные продукты</li>
                              <li>• Ограничение насыщенных жиров</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Медикаментозное лечение:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-medium mb-2">Препараты первой линии:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Ингибиторы АПФ (лизиноприл, эналаприл)</li>
                              <li>• Блокаторы рецепторов ангиотензина</li>
                              <li>• Диуретики (гидрохлортиазид)</li>
                              <li>• Блокаторы кальциевых каналов</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-medium mb-2">Дополнительные препараты:</h5>
                            <ul className="text-sm space-y-1">
                              <li>• Бета-блокаторы</li>
                              <li>• Альфа-блокаторы</li>
                              <li>• Комбинированные препараты</li>
                              <li>• Препараты центрального действия</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Tools */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Полезные инструменты</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link to="/tools/blood-pressure-calculator">
                      <Button variant="outline" className="w-full justify-start">
                        <Heart className="h-4 w-4 mr-2" />
                        Калькулятор давления
                      </Button>
                    </Link>
                    <Link to="/tools/heart-risk-assessment">
                      <Button variant="outline" className="w-full justify-start">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Оценка риска
                      </Button>
                    </Link>
                    <Link to="/medications/blood-pressure">
                      <Button variant="outline" className="w-full justify-start">
                        <Pill className="h-4 w-4 mr-2" />
                        Препараты
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Related Articles */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Связанные статьи</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/articles/heart-health/diet-for-hypertension" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Диета при гипертонии</h4>
                        <p className="text-xs text-gray-600">Питание для снижения давления</p>
                      </div>
                    </Link>
                    <Link to="/articles/heart-health/exercise-hypertension" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Физические нагрузки</h4>
                        <p className="text-xs text-gray-600">Безопасные упражнения</p>
                      </div>
                    </Link>
                    <Link to="/articles/heart-health/monitoring-bp" className="block">
                      <div className="p-3 border rounded-lg hover:bg-gray-50">
                        <h4 className="font-medium text-sm mb-1">Мониторинг давления</h4>
                        <p className="text-xs text-gray-600">Как правильно измерять</p>
                      </div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Emergency Warning */}
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Срочная помощь
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-700 mb-3">
                      Обратитесь за экстренной помощью при:
                    </p>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Давление выше 180/120</li>
                      <li>• Сильная головная боль</li>
                      <li>• Боль в груди</li>
                      <li>• Затрудненное дыхание</li>
                      <li>• Нарушения зрения</li>
                    </ul>
                    <div className="mt-3 text-center">
                      <div className="text-lg font-bold text-red-600">Телефон: 103</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HypertensionPage;
