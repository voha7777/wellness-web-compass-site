
import { Link } from "react-router-dom";
import { Calculator, Heart, Activity, Scale, Thermometer, Clock, Brain, Stethoscope } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ToolsPage = () => {
  const calculators = [
    {
      title: "Калькулятор ИМТ",
      description: "Рассчитайте индекс массы тела и узнайте, находится ли ваш вес в норме",
      icon: <Scale className="h-8 w-8" />,
      color: "bg-blue-50 text-blue-700",
      slug: "/tools/bmi-calculator",
      popular: true
    },
    {
      title: "Калькулятор калорий",
      description: "Определите суточную потребность в калориях с учетом активности",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-green-50 text-green-700",
      slug: "/tools/calorie-calculator",
      popular: true
    },
    {
      title: "Калькулятор сердечного ритма",
      description: "Рассчитайте целевую зону пульса для эффективных тренировок",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-red-50 text-red-700",
      slug: "/tools/heart-rate-calculator",
      popular: false
    },
    {
      title: "Калькулятор дозировки",
      description: "Рассчитайте правильную дозу лекарств для детей и взрослых",
      icon: <Thermometer className="h-8 w-8" />,
      color: "bg-purple-50 text-purple-700",
      slug: "/tools/dosage-calculator",
      popular: false
    }
  ];

  const assessmentTools = [
    {
      title: "Проверка симптомов",
      description: "Анализ симптомов с предварительными рекомендациями",
      icon: <Stethoscope className="h-8 w-8" />,
      color: "bg-orange-50 text-orange-700",
      slug: "/tools/symptom-checker",
      features: ["Анализ симптомов", "Список возможных причин", "Рекомендации"]
    },
    {
      title: "Оценка риска диабета",
      description: "Определите риск развития сахарного диабета 2 типа",
      icon: <Activity className="h-8 w-8" />,
      color: "bg-yellow-50 text-yellow-700",
      slug: "/tools/diabetes-risk",
      features: ["Факторы риска", "Персональная оценка", "Профилактика"]
    },
    {
      title: "Тест на депрессию",
      description: "Скрининговый тест для выявления признаков депрессии",
      icon: <Brain className="h-8 w-8" />,
      color: "bg-indigo-50 text-indigo-700",
      slug: "/tools/depression-test",
      features: ["PHQ-9 опросник", "Анализ результатов", "Рекомендации специалистов"]
    },
    {
      title: "Оценка здоровья сердца",
      description: "Комплексная оценка риска сердечно-сосудистых заболеваний",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-red-50 text-red-700",
      slug: "/tools/heart-health-assessment",
      features: ["Факторы риска", "Образ жизни", "Профилактические меры"]
    }
  ];

  const interactionTools = [
    {
      title: "Проверка взаимодействий лекарств",
      description: "Проверьте совместимость принимаемых препаратов",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-red-50 text-red-700",
      slug: "/tools/drug-interactions"
    },
    {
      title: "Поиск аналогов лекарств",
      description: "Найдите более доступные аналоги дорогих препаратов",
      icon: <Calculator className="h-8 w-8" />,
      color: "bg-green-50 text-green-700",
      slug: "/tools/drug-alternatives"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-health-600 to-health-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Медицинские калькуляторы и инструменты</h1>
              <p className="text-xl opacity-90">
                Полезные инструменты для контроля здоровья и расчета медицинских показателей
              </p>
            </div>
          </div>
        </section>

        {/* Health Calculators */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Калькуляторы здоровья</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {calculators.map((calc, index) => (
                <Link key={index} to={calc.slug}>
                  <Card className="hover:shadow-lg transition-all duration-300 h-full relative">
                    {calc.popular && (
                      <div className="absolute top-2 right-2 bg-health-600 text-white text-xs px-2 py-1 rounded-full">
                        Популярный
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div className={`${calc.color} p-4 rounded-lg inline-block mx-auto mb-4`}>
                        {calc.icon}
                      </div>
                      <CardTitle className="text-lg">{calc.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 text-sm mb-4">{calc.description}</p>
                      <Button className="w-full">Рассчитать</Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Health Assessments */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Оценка состояния здоровья</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assessmentTools.map((tool, index) => (
                <Link key={index} to={tool.slug}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className={`${tool.color} p-3 rounded-lg`}>
                          {tool.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                          <p className="text-gray-600">{tool.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-health-600 rounded-full"></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full">Пройти оценку</Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Drug Tools */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Инструменты для лекарств</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interactionTools.map((tool, index) => (
                <Link key={index} to={tool.slug}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`${tool.color} p-3 rounded-lg`}>
                          {tool.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{tool.title}</CardTitle>
                          <p className="text-gray-600 text-sm mt-1">{tool.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Использовать инструмент</Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Tools */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Экстренные ситуации</h2>
              <p className="text-red-700">Важные номера и первая помощь</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-red-200">
                <CardHeader className="text-center">
                  <div className="bg-red-100 text-red-700 p-3 rounded-lg inline-block mx-auto mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-red-800">Скорая помощь</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">103</div>
                  <p className="text-sm text-red-700">Круглосуточно, бесплатно</p>
                </CardContent>
              </Card>
              
              <Link to="/tools/first-aid">
                <Card className="border-red-200 hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg inline-block mx-auto mb-2">
                      <Heart className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-red-800">Первая помощь</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-red-700 mb-4">Пошаговые инструкции</p>
                    <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                      Открыть руководство
                    </Button>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/tools/emergency-contacts">
                <Card className="border-red-200 hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg inline-block mx-auto mb-2">
                      <Stethoscope className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-red-800">Экстренные контакты</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-red-700 mb-4">Все важные номера</p>
                    <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                      Посмотреть контакты
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ToolsPage;
