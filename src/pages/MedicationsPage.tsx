
import { Link } from "react-router-dom";
import { Search, Filter, Pill, AlertTriangle, Info, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MedicationsPage = () => {
  const categories = [
    {
      name: "Обезболивающие",
      count: 45,
      description: "Препараты для снятия боли",
      color: "bg-blue-50 text-blue-700"
    },
    {
      name: "Антибиотики",
      count: 67,
      description: "Противомикробные средства",
      color: "bg-green-50 text-green-700"
    },
    {
      name: "Витамины и БАДы",
      count: 123,
      description: "Биологически активные добавки",
      color: "bg-yellow-50 text-yellow-700"
    },
    {
      name: "Сердечно-сосудистые",
      count: 89,
      description: "Препараты для сердца и сосудов",
      color: "bg-red-50 text-red-700"
    }
  ];

  const popularMedications = [
    {
      name: "Лизиноприл",
      genericName: "Lisinopril",
      category: "Ингибиторы АПФ",
      indication: "Артериальная гипертензия",
      prescriptionRequired: true,
      slug: "lisinopril"
    },
    {
      name: "Аторвастатин",
      genericName: "Atorvastatin",
      category: "Статины",
      indication: "Высокий холестерин",
      prescriptionRequired: true,
      slug: "atorvastatin"
    },
    {
      name: "Метформин",
      genericName: "Metformin",
      category: "Противодиабетические",
      indication: "Сахарный диабет 2 типа",
      prescriptionRequired: true,
      slug: "metformin"
    },
    {
      name: "Ибупрофен",
      genericName: "Ibuprofen",
      category: "НПВС",
      indication: "Боль и воспаление",
      prescriptionRequired: false,
      slug: "ibuprofen"
    },
    {
      name: "Омепразол",
      genericName: "Omeprazole",
      category: "Ингибиторы протонной помпы",
      indication: "Изжога, язвенная болезнь",
      prescriptionRequired: false,
      slug: "omeprazole"
    },
    {
      name: "Сальбутамол",
      genericName: "Salbutamol",
      category: "Бронходилататоры",
      indication: "Астма, ХОБЛ",
      prescriptionRequired: true,
      slug: "salbutamol"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Лекарственные препараты</h1>
              <p className="text-xl mb-8 opacity-90">
                Полная база данных лекарственных средств с описанием, дозировками и взаимодействиями
              </p>
              
              {/* Search */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Pill className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="search"
                    placeholder="Поиск лекарств по названию или действующему веществу..."
                    className="pl-12 pr-4 py-3 text-gray-900 bg-white border-0 focus-visible:ring-2 focus-visible:ring-white"
                  />
                  <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-health-600 hover:bg-health-700">
                    Найти
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="bg-yellow-50 border-b border-yellow-200 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-3 max-w-4xl mx-auto">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-yellow-800">
                <strong>Важно:</strong> Информация предоставлена в ознакомительных целях. 
                Перед применением любых лекарственных средств обязательно проконсультируйтесь с врачом или фармацевтом.
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Категории лекарственных средств</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className={`${category.color} px-3 py-1 rounded-full text-sm font-medium w-fit`}>
                      {category.count} препаратов
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Medications */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Популярные лекарственные препараты</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Фильтры
                </Button>
                <Link to="/medications/index">
                  <Button variant="outline" size="sm">
                    Алфавитный указатель
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularMedications.map((medication, index) => (
                <Link key={index} to={`/medications/${medication.slug}`}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-health-700">{medication.name}</CardTitle>
                          <p className="text-sm text-gray-500 italic">{medication.genericName}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {medication.prescriptionRequired ? (
                            <Badge variant="destructive" className="text-xs">Рецептурный</Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">Безрецептурный</Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Категория: </span>
                          <span className="text-sm text-gray-600">{medication.category}</span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Показания: </span>
                          <span className="text-sm text-gray-600">{medication.indication}</span>
                        </div>
                        <div className="mt-4 flex items-center text-health-600 text-sm font-medium">
                          Подробная информация
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-semibold mb-6 text-center">Полезные инструменты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/tools/drug-interactions" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Проверка взаимодействий</div>
                <div className="text-sm text-gray-600">Проверьте совместимость лекарств</div>
              </Link>
              <Link to="/medications/dosage-calculator" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <Info className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Калькулятор дозировок</div>
                <div className="text-sm text-gray-600">Рассчитайте правильную дозу</div>
              </Link>
              <Link to="/medications/side-effects" className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-health-600 mx-auto mb-3" />
                <div className="font-medium text-gray-900 mb-2">Побочные эффекты</div>
                <div className="text-sm text-gray-600">Узнайте о возможных реакциях</div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MedicationsPage;
