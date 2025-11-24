'use client'

import { useState } from 'react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { SpotlightAceternity } from "@/components/ui/spotlight-aceternity";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Bot,
  Sparkles,
  Zap,
  Globe,
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  Phone,
  Mail,
  ArrowRight,
  X
} from 'lucide-react';

export default function Home() {
  const [openService, setOpenService] = useState<string | null>(null);

  const scrollToService = (serviceId: string) => {
    setOpenService(serviceId);
    setTimeout(() => {
      document.getElementById(serviceId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const closeService = () => {
    setOpenService(null);
  };
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 flex items-center justify-center bg-slate-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="container mx-auto px-4 z-10">
          <Card className="w-full min-h-[600px] bg-black/[0.96] relative overflow-hidden border-slate-800">
            <SpotlightAceternity
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex flex-col md:flex-row h-full">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full border border-blue-500/30 w-fit">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-blue-300">Технологии будущего уже здесь</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    MDTechnology
                  </span>
                  <br />
                  <span className="text-white">
                    AI-решения для вашего бизнеса
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-200 max-w-lg mb-8 leading-relaxed">
                  Превратите свой бизнес в технологического лидера с помощью искусственного интеллекта.
                  Автоматизация, которая работает 24/7.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#contact"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Получить консультацию
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 border border-slate-700 rounded-lg font-semibold text-white hover:bg-slate-800 transition-all duration-300 text-center"
                  >
                    Наши услуги
                  </a>
                </div>
              </div>

              {/* Right content - 3D Scene */}
              <div className="flex-1 relative min-h-[400px] md:min-h-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Почему выбирают нас?
            </h2>
            <p className="text-xl text-neutral-400">
              Мы превращаем сложные технологии в простые решения для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Быстрый результат",
                description: "Запускаем AI-решения за 2-4 недели, не месяцы ожидания"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Рост продаж до 300%",
                description: "AI-агенты работают круглосуточно, конвертируя посетителей в клиентов"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Полное сопровождение",
                description: "От идеи до внедрения и технической поддержки 24/7"
              }
            ].map((feature, idx) => (
              <Card key={idx} className="relative p-8 bg-slate-900/90 backdrop-blur border-slate-700 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                <Spotlight className="from-blue-600/40 via-purple-600/40 to-pink-600/40" size={250} />
                <div className="relative z-10">
                  <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-neutral-300 font-medium">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-neutral-400">
              Комплексные AI-решения под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <Card className="relative overflow-hidden bg-slate-900/95 backdrop-blur border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Globe className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI-сайты нового поколения</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    "Умные формы с предиктивной аналитикой",
                    "Персонализация контента для каждого посетителя",
                    "AI-рекомендации товаров и услуг",
                    "Автоматическая оптимизация конверсии"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToService('service-websites')}
                  className="inline-flex items-center text-blue-400 font-semibold hover:gap-3 gap-2 transition-all cursor-pointer hover:text-blue-300"
                >
                  Подробнее <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="relative overflow-hidden bg-slate-900/95 backdrop-blur border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                    <MessageSquare className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Умные чат-боты</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {[
                    "Обработка 1000+ запросов одновременно",
                    "Естественный диалог на русском и английском",
                    "Интеграция с CRM и базами знаний",
                    "Обучение на данных вашей компании"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-neutral-200">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollToService('service-chatbots')}
                  className="inline-flex items-center text-purple-400 font-semibold hover:gap-3 gap-2 transition-all cursor-pointer hover:text-purple-300"
                >
                  Подробнее <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="relative overflow-hidden bg-slate-900/95 backdrop-blur border-slate-700 hover:border-pink-500/50 transition-all duration-300 group md:col-span-2">
              <div className="p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-600/20 rounded-lg group-hover:bg-pink-600/30 transition-colors">
                    <Bot className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">AI-бизнес агенты</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-neutral-300 mb-4">
                      Автономные AI-агенты, которые выполняют сложные бизнес-задачи без участия человека
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Автоматический анализ рынка и конкурентов",
                        "Генерация отчетов и презентаций",
                        "Управление email-рассылками"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-300">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-3">
                      {[
                        "Обработка документов и договоров",
                        "Автоматизация рутинных процессов",
                        "Предиктивная аналитика и прогнозы",
                        "Интеграция с вашими системами"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-neutral-300">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => scrollToService('service-agents')}
                  className="mt-6 inline-flex items-center text-pink-400 font-semibold hover:gap-3 gap-2 transition-all cursor-pointer hover:text-pink-300"
                >
                  Узнать больше <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Details - AI Websites */}
      {openService === 'service-websites' && (
        <section id="service-websites" className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <Card className="relative overflow-hidden bg-slate-900/98 backdrop-blur-xl border-blue-500/50 shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-blue-600/30 rounded-xl">
                      <Globe className="w-10 h-10 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">AI-сайты нового поколения</h2>
                      <p className="text-blue-300">Интеллектуальные веб-платформы с искусственным интеллектом</p>
                    </div>
                  </div>
                  <button
                    onClick={closeService}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400 hover:text-white" />
                  </button>
                </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Что это такое?</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    AI-сайт — это не просто красивая веб-страница. Это умная платформа, которая анализирует
                    поведение каждого посетителя в режиме реального времени и адаптирует контент под его интересы,
                    увеличивая конверсию в 2-3 раза.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Наши AI-сайты используют машинное обучение для предсказания намерений пользователя,
                    автоматически оптимизируют воронку продаж и работают как виртуальный продавец 24/7.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-lg border border-blue-500/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Ключевые преимущества
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Конверсия выше на 150-300% по сравнению с обычными сайтами",
                      "Персонализация для каждого посетителя автоматически",
                      "Снижение стоимости привлечения клиента до 70%",
                      "Автоматическое A/B тестирование без участия маркетолога",
                      "Интеграция с CRM, аналитикой и рекламными системами"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Основные функции</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-600 shadow-md">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Умные формы</h4>
                    <p className="text-slate-300 text-sm">
                      Формы предсказывают, что пользователь хочет ввести, автоматически заполняют поля
                      и задают релевантные вопросы на основе предыдущих ответов.
                    </p>
                  </div>

                  <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-600 shadow-md">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">Динамический контент</h4>
                    <p className="text-slate-300 text-sm">
                      Заголовки, изображения и предложения меняются для каждого посетителя на основе
                      его источника трафика, устройства и поведения на сайте.
                    </p>
                  </div>

                  <div className="bg-slate-800/70 p-6 rounded-lg border border-slate-600 shadow-md">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-lg flex items-center justify-center mb-4">
                      <Bot className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">AI-рекомендации</h4>
                    <p className="text-slate-300 text-sm">
                      Система анализирует интересы посетителя и показывает наиболее релевантные
                      товары, услуги или контент, увеличивая средний чек.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Этапы разработки</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "1", title: "Аудит и стратегия", time: "2-3 дня" },
                    { step: "2", title: "Дизайн и прототип", time: "5-7 дней" },
                    { step: "3", title: "Разработка и AI-интеграция", time: "2-3 недели" },
                    { step: "4", title: "Тестирование и запуск", time: "3-5 дней" }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                        {phase.step}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{phase.title}</h4>
                      <p className="text-blue-300 text-sm">{phase.time}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Заказать AI-сайт
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
      )}

      {/* Service Details - Chatbots */}
      {openService === 'service-chatbots' && (
        <section id="service-chatbots" className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <Card className="relative overflow-hidden bg-slate-900/98 backdrop-blur-xl border-purple-500/50 shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-purple-600/30 rounded-xl">
                      <MessageSquare className="w-10 h-10 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Умные чат-боты</h2>
                      <p className="text-purple-300">AI-ассистенты для автоматизации общения с клиентами</p>
                    </div>
                  </div>
                  <button
                    onClick={closeService}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400 hover:text-white" />
                  </button>
                </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Что это такое?</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Умный чат-бот на базе GPT-4 и собственных AI-моделей — это виртуальный сотрудник,
                    который может одновременно общаться с тысячами клиентов, отвечать на сложные вопросы,
                    консультировать и даже закрывать сделки.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    В отличие от простых ботов с кнопками, наши AI-ассистенты понимают естественный язык,
                    контекст разговора и могут самостоятельно решать нестандартные задачи.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-lg border border-purple-500/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Ключевые преимущества
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Обработка 1000+ диалогов одновременно без потери качества",
                      "Работа 24/7 без выходных и перерывов",
                      "Снижение нагрузки на поддержку до 80%",
                      "Мгновенные ответы на вопросы клиентов",
                      "Обучение на базе знаний вашей компании",
                      "Поддержка 100+ языков для международного бизнеса"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Возможности и интеграции</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-purple-400" />
                      Каналы коммуникации
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "WhatsApp Business", desc: "Самый популярный мессенджер для бизнеса" },
                        { name: "Telegram", desc: "Быстрая интеграция и богатый функционал" },
                        { name: "Веб-чат на сайте", desc: "Встраивается на любой сайт за 5 минут" },
                        { name: "Instagram Direct", desc: "Автоответы в социальных сетях" },
                        { name: "Email", desc: "Автоматическая обработка писем" }
                      ].map((channel, idx) => (
                        <div key={idx} className="bg-slate-800/70 p-4 rounded-lg border border-slate-600 shadow-md">
                          <p className="text-white font-semibold">{channel.name}</p>
                          <p className="text-slate-400 text-sm mt-1">{channel.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-400" />
                      Умные функции
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Квалификация лидов", desc: "Автоматически определяет горячих клиентов" },
                        { name: "Запись на встречи", desc: "Интеграция с календарем и бронирование" },
                        { name: "Обработка заказов", desc: "Прием заказов и оплата через бота" },
                        { name: "Техподдержка", desc: "Решение типовых проблем без человека" },
                        { name: "Опросы и фидбек", desc: "Сбор отзывов и анализ удовлетворенности" }
                      ].map((feature, idx) => (
                        <div key={idx} className="bg-slate-800/70 p-4 rounded-lg border border-slate-600 shadow-md">
                          <p className="text-white font-semibold">{feature.name}</p>
                          <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 bg-slate-800/70 p-6 rounded-lg border border-purple-500/40 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Интеграция с вашими системами</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    "CRM (AmoCRM, Bitrix24, HubSpot)",
                    "Базы данных (PostgreSQL, MongoDB)",
                    "API и webhooks",
                    "1С и учетные системы"
                  ].map((integration, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-4 rounded-lg text-center border border-slate-600 shadow-md">
                      <CheckCircle2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-white text-sm font-semibold">{integration}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-lg border border-purple-500/30 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4">Примеры использования</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { title: "E-commerce", desc: "Консультация по товарам, обработка заказов, отслеживание доставки" },
                    { title: "Медицина", desc: "Запись к врачам, напоминания о приеме, консультации" },
                    { title: "Образование", desc: "Ответы на вопросы студентов, расписание, регистрация на курсы" },
                    { title: "Недвижимость", desc: "Подбор объектов, запись на просмотры, квалификация клиентов" },
                    { title: "Финансы", desc: "Консультации по продуктам, заявки на кредиты, поддержка" },
                    { title: "HR и рекрутинг", desc: "Первичный скрининг кандидатов, FAQ для сотрудников" }
                  ].map((example, idx) => (
                    <div key={idx} className="p-4 bg-slate-800/80 rounded-lg border border-slate-600 shadow-md">
                      <h4 className="text-purple-300 font-bold mb-2">{example.title}</h4>
                      <p className="text-slate-400 text-sm">{example.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Создать чат-бота
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
      )}

      {/* Service Details - AI Agents */}
      {openService === 'service-agents' && (
        <section id="service-agents" className="py-20 px-4 relative">
          <div className="container mx-auto max-w-6xl">
            <Card className="relative overflow-hidden bg-slate-900/98 backdrop-blur-xl border-pink-500/50 shadow-2xl">
              <div className="p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-pink-600/30 rounded-xl">
                      <Bot className="w-10 h-10 text-pink-400" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">AI-бизнес агенты</h2>
                      <p className="text-pink-300">Автономные AI-системы для комплексной автоматизации бизнеса</p>
                    </div>
                  </div>
                  <button
                    onClick={closeService}
                    className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-400 hover:text-white" />
                  </button>
                </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Что это такое?</h3>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    AI-бизнес агент — это следующий уровень автоматизации. Это не просто программа,
                    а автономная система, которая может принимать решения, выполнять сложные многоэтапные
                    задачи и взаимодействовать с другими системами без участия человека.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Представьте виртуального сотрудника, который может анализировать рынок, генерировать
                    отчеты, управлять рассылками, обрабатывать документы и выполнять другие рутинные
                    задачи, освобождая ваше время для стратегических решений.
                  </p>
                </div>

                <div className="bg-slate-800/90 p-6 rounded-lg border border-pink-500/30 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-yellow-400" />
                    Ключевые преимущества
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Экономия 20-40 часов работы в неделю на рутинных задачах",
                      "Автономная работа без постоянного контроля",
                      "Обработка больших объемов данных за минуты",
                      "Принятие решений на основе анализа данных",
                      "Масштабирование без найма дополнительных сотрудников",
                      "Работа 24/7 без выходных и больничных"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-200">
                        <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Типы AI-агентов</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 bg-slate-800/70 p-6 rounded-lg border border-pink-500/40 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-pink-400" />
                      Аналитические агенты
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { name: "Анализ конкурентов", desc: "Мониторинг цен, акций, новых продуктов конкурентов" },
                        { name: "Рыночные исследования", desc: "Сбор данных о трендах, спросе, аудитории" },
                        { name: "Финансовая аналитика", desc: "Анализ расходов, прогноз доходов, оптимизация бюджета" },
                        { name: "Анализ социальных сетей", desc: "Мониторинг упоминаний бренда, настроений клиентов" }
                      ].map((item, idx) => (
                        <li key={idx} className="text-slate-300">
                          <span className="text-pink-300 font-semibold">{item.name}:</span> {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 bg-slate-800/70 p-6 rounded-lg border border-purple-500/40 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-purple-400" />
                      Операционные агенты
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { name: "Email-менеджер", desc: "Сортировка писем, автоответы, создание рассылок" },
                        { name: "Документооборот", desc: "Обработка договоров, счетов, актов, выставление документов" },
                        { name: "Планирование встреч", desc: "Координация расписаний, отправка напоминаний" },
                        { name: "Управление задачами", desc: "Распределение задач, контроль дедлайнов, отчеты" }
                      ].map((item, idx) => (
                        <li key={idx} className="text-slate-300">
                          <span className="text-purple-300 font-semibold">{item.name}:</span> {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 bg-slate-800/70 p-6 rounded-lg border border-blue-500/40 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 text-blue-400" />
                      Маркетинговые агенты
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { name: "Контент-генерация", desc: "Создание постов, статей, описаний товаров" },
                        { name: "SEO-оптимизация", desc: "Подбор ключевых слов, оптимизация текстов" },
                        { name: "Управление рекламой", desc: "Настройка кампаний, анализ эффективности, оптимизация" },
                        { name: "Персонализация", desc: "Создание индивидуальных предложений для клиентов" }
                      ].map((item, idx) => (
                        <li key={idx} className="text-slate-300">
                          <span className="text-blue-300 font-semibold">{item.name}:</span> {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-600/20 to-pink-600/20 bg-slate-800/70 p-6 rounded-lg border border-green-500/40 shadow-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                      <Bot className="w-6 h-6 text-green-400" />
                      Продажные агенты
                    </h4>
                    <ul className="space-y-3">
                      {[
                        { name: "Лидогенерация", desc: "Поиск потенциальных клиентов, первичный контакт" },
                        { name: "Квалификация", desc: "Оценка качества лидов, приоритизация" },
                        { name: "Follow-up", desc: "Автоматические напоминания и повторные касания" },
                        { name: "Кросс-продажи", desc: "Рекомендации дополнительных товаров и услуг" }
                      ].map((item, idx) => (
                        <li key={idx} className="text-slate-300">
                          <span className="text-green-300 font-semibold">{item.name}:</span> {item.desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 bg-slate-800/70 p-6 rounded-lg border border-pink-500/40 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Процесс внедрения AI-агента</h3>
                <div className="grid md:grid-cols-5 gap-4">
                  {[
                    { step: "1", title: "Анализ процессов", desc: "Определяем задачи для автоматизации" },
                    { step: "2", title: "Проектирование", desc: "Создаем архитектуру агента" },
                    { step: "3", title: "Обучение", desc: "Тренируем на ваших данных" },
                    { step: "4", title: "Интеграция", desc: "Подключаем к системам" },
                    { step: "5", title: "Запуск и оптимизация", desc: "Мониторинг и улучшение" }
                  ].map((phase, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-2">
                        {phase.step}
                      </div>
                      <h4 className="text-white font-semibold mb-1 text-sm">{phase.title}</h4>
                      <p className="text-pink-300 text-xs">{phase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/80 p-6 rounded-lg border border-pink-500/30 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Кейсы и результаты</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      industry: "E-commerce",
                      task: "Автоматизация обработки заказов и поддержки",
                      result: "Снижение времени обработки с 24 часов до 5 минут, рост удовлетворенности клиентов на 45%"
                    },
                    {
                      industry: "B2B-компания",
                      task: "Автоматизация лидогенерации и квалификации",
                      result: "Увеличение количества квалифицированных лидов в 3 раза при сокращении расходов на 60%"
                    },
                    {
                      industry: "Консалтинг",
                      task: "Автоматизация создания отчетов и презентаций",
                      result: "Экономия 30 часов в неделю, время на создание отчета сокращено с 8 часов до 20 минут"
                    }
                  ].map((caseItem, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-5 rounded-lg border border-slate-600 shadow-md">
                      <div className="inline-block px-3 py-1 bg-pink-600/20 rounded-full text-pink-300 text-xs font-semibold mb-3">
                        {caseItem.industry}
                      </div>
                      <h4 className="text-white font-semibold mb-2 text-sm">{caseItem.task}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{caseItem.result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Технологический стек</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { tech: "GPT-4 & Claude", desc: "Передовые языковые модели" },
                    { tech: "LangChain", desc: "Фреймворк для AI-агентов" },
                    { tech: "Python & Node.js", desc: "Быстрая разработка" },
                    { tech: "Docker & K8s", desc: "Масштабируемость" }
                  ].map((tech, idx) => (
                    <div key={idx} className="bg-slate-800/80 p-4 rounded-lg text-center border border-slate-600 shadow-md">
                      <p className="text-white font-semibold mb-1">{tech.tech}</p>
                      <p className="text-slate-400 text-xs">{tech.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg font-semibold text-white hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                >
                  Внедрить AI-агента
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
      )}

      {/* Social Proof */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-xl border-blue-500/50 shadow-2xl">
            <div className="p-12 text-center relative z-10">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6 drop-shadow-glow" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                Начните цифровую трансформацию уже сегодня
              </h2>
              <p className="text-xl text-slate-100 mb-8 font-medium drop-shadow-md">
                Не упустите конкурентное преимущество. Первые 5 клиентов получают скидку 25%
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-6 py-2 bg-green-600/30 border-2 border-green-400/70 rounded-full text-green-100 font-bold shadow-lg backdrop-blur-sm">
                  ✓ Бесплатный аудит
                </span>
                <span className="px-6 py-2 bg-blue-600/30 border-2 border-blue-400/70 rounded-full text-blue-100 font-bold shadow-lg backdrop-blur-sm">
                  ✓ Прототип за 3 дня
                </span>
                <span className="px-6 py-2 bg-purple-600/30 border-2 border-purple-400/70 rounded-full text-purple-100 font-bold shadow-lg backdrop-blur-sm">
                  ✓ Гарантия результата
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Готовы к AI-трансформации?
            </h2>
            <p className="text-xl text-neutral-400">
              Свяжитесь с нами и получите персональное предложение
            </p>
          </div>

          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Контакты</h3>

                  <div className="space-y-6">
                    <a
                      href="tel:+77056235922"
                      className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                    >
                      <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        <Phone className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500">Телефон / WhatsApp</div>
                        <div className="text-lg font-semibold">+7 (705) 623-59-22</div>
                      </div>
                    </a>

                    <a
                      href="mailto:info@mdtechnology.ai"
                      className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors group"
                    >
                      <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500">Email</div>
                        <div className="text-lg font-semibold">info@mdtechnology.ai</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-3">
                      Бесплатная консультация
                    </h4>
                    <p className="text-blue-100 mb-4">
                      Оставьте заявку, и мы свяжемся с вами в течение 1 часа
                    </p>
                    <a
                      href="https://wa.me/77056235922"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg text-center hover:bg-blue-50 transition-colors"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              MDTechnology.ai
            </div>
            <div className="text-neutral-500 text-center md:text-right">
              © 2024 MDTechnology.ai. Все права защищены.<br />
              Создаем будущее с искусственным интеллектом
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
