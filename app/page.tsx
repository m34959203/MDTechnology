'use client'

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
  ArrowRight
} from 'lucide-react';

export default function Home() {
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

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                  AI-решения для<br />вашего бизнеса
                </h1>

                <p className="text-lg md:text-xl text-neutral-300 max-w-lg mb-8">
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
              <Card key={idx} className="relative p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                <Spotlight className="from-blue-600 via-purple-600 to-pink-600" size={300} />
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-neutral-400">{feature.description}</p>
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
            <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="p-8">
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
                    <li key={idx} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center text-blue-400 font-semibold group-hover:gap-3 gap-2 transition-all cursor-pointer">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>

            {/* Service 2 */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="p-8">
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
                    <li key={idx} className="flex items-start gap-3 text-neutral-300">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="inline-flex items-center text-purple-400 font-semibold group-hover:gap-3 gap-2 transition-all cursor-pointer">
                  Подробнее <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>

            {/* Service 3 */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 hover:border-pink-500/50 transition-all duration-300 group md:col-span-2">
              <div className="p-8">
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

                <div className="mt-6 inline-flex items-center text-pink-400 font-semibold group-hover:gap-3 gap-2 transition-all cursor-pointer">
                  Узнать больше <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <Card className="relative overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30">
            <div className="p-12 text-center">
              <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Начните цифровую трансформацию уже сегодня
              </h2>
              <p className="text-xl text-neutral-300 mb-8">
                Не упустите конкурентное преимущество. Первые 5 клиентов получают скидку 25%
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-6 py-2 bg-green-600/20 border border-green-500/50 rounded-full text-green-300 font-semibold">
                  ✓ Бесплатный аудит
                </span>
                <span className="px-6 py-2 bg-blue-600/20 border border-blue-500/50 rounded-full text-blue-300 font-semibold">
                  ✓ Прототип за 3 дня
                </span>
                <span className="px-6 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 font-semibold">
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
