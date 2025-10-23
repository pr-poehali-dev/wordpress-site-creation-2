import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [videoDialogOpen, setVideoDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Изучите HTML, CSS, JavaScript и создайте свой первый сайт',
      duration: '12 недель',
      level: 'Начинающий',
      students: 1240,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400'
    },
    {
      id: 2,
      title: 'Python для анализа данных',
      description: 'Освойте Python, pandas и машинное обучение',
      duration: '10 недель',
      level: 'Средний',
      students: 980,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400'
    },
    {
      id: 3,
      title: 'UX/UI Дизайн',
      description: 'Создавайте удобные интерфейсы в Figma',
      duration: '8 недель',
      level: 'Начинающий',
      students: 756,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400'
    },
    {
      id: 4,
      title: 'Мобильная разработка',
      description: 'Разработка приложений на React Native',
      duration: '14 недель',
      level: 'Продвинутый',
      students: 542,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400'
    }
  ];

  const features = [
    {
      icon: 'Video',
      title: 'Видеоуроки HD',
      description: 'Качественные записи с практическими примерами'
    },
    {
      icon: 'Award',
      title: 'Сертификаты',
      description: 'Получите официальный сертификат после обучения'
    },
    {
      icon: 'Users',
      title: 'Сообщество',
      description: 'Общайтесь с тысячами студентов и менторов'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Учитесь в удобное для вас время'
    }
  ];

  const blogPosts = [
    {
      title: '10 трендов EdTech в 2024',
      date: '15 октября 2024',
      author: 'Анна Смирнова',
      excerpt: 'Какие технологии изменят образование в ближайшее время',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400'
    },
    {
      title: 'Как эффективно учиться онлайн',
      date: '10 октября 2024',
      author: 'Михаил Петров',
      excerpt: '5 проверенных методик для повышения продуктивности',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'
    },
    {
      title: 'Истории успеха наших студентов',
      date: '5 октября 2024',
      author: 'Елена Иванова',
      excerpt: 'Как онлайн-курсы помогли сменить профессию',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EduPlatform
              </span>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`font-medium transition-colors ${activeSection === 'home' ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('courses')}
                className={`font-medium transition-colors ${activeSection === 'courses' ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
              >
                Курсы
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-colors ${activeSection === 'about' ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
              >
                О платформе
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className={`font-medium transition-colors ${activeSection === 'blog' ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
              >
                Блог
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`font-medium transition-colors ${activeSection === 'contact' ? 'text-primary' : 'text-foreground/70 hover:text-primary'}`}
              >
                Контакты
              </button>
            </nav>

            <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30">
              Войти
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
                Обучение
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  нового уровня
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Откройте для себя тысячи курсов от ведущих экспертов. 
                Развивайтесь в своём темпе и достигайте новых высот.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30 text-lg px-8"
                  onClick={() => scrollToSection('courses')}
                >
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 text-lg px-8 hover:bg-secondary/10 hover:border-secondary"
                  onClick={() => setVideoDialogOpen(true)}
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15K+</div>
                  <div className="text-sm text-foreground/60">Студентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">200+</div>
                  <div className="text-sm text-foreground/60">Курсов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">98%</div>
                  <div className="text-sm text-foreground/60">Довольны</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" 
                  alt="Студенты"
                  className="rounded-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent p-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Icon name="Star" className="text-foreground" size={24} />
                    <div>
                      <div className="font-bold text-lg">4.9/5</div>
                      <div className="text-sm text-foreground/70">Рейтинг</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Популярные курсы
            </h2>
            <p className="text-xl text-foreground/70">
              Выберите направление и начните обучение уже сегодня
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="beginner">Начинающий</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card 
                  key={course.id} 
                  className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-sm font-semibold">
                      {course.level}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        {course.students}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-accent">
                      <Icon name="Star" size={16} fill="currentColor" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setVideoDialogOpen(true)}>
                      Начать курс
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="beginner" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.filter(c => c.level === 'Начинающий').map((course) => (
                <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-sm font-semibold">{course.level}</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setVideoDialogOpen(true)}>Начать курс</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="advanced" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.filter(c => c.level === 'Продвинутый').map((course) => (
                <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute top-3 right-3 bg-accent px-3 py-1 rounded-full text-sm font-semibold">{course.level}</div>
                  </div>
                  <CardHeader>
                    <CardTitle className="font-heading">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => setVideoDialogOpen(true)}>Начать курс</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading">
                О платформе
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                EduPlatform — это современная образовательная экосистема, созданная для тех, 
                кто стремится к постоянному развитию. Мы объединяем лучших преподавателей 
                и передовые технологии, чтобы сделать обучение доступным и эффективным.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                С 2020 года мы помогли более 15 000 студентов освоить новые профессии 
                и навыки. Наша миссия — сделать качественное образование доступным каждому, 
                независимо от местоположения и графика.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-primary">4 года</div>
                  <div className="text-foreground/60">На рынке EdTech</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-secondary">150+</div>
                  <div className="text-foreground/60">Экспертов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600" 
                alt="О платформе"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">Блог</h2>
            <p className="text-xl text-foreground/70">Полезные статьи об образовании и карьере</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-secondary overflow-hidden cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                  <CardTitle className="font-heading group-hover:text-secondary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <Icon name="User" size={14} />
                    {post.author}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold font-heading">Контакты</h2>
            <p className="text-xl opacity-90">
              Остались вопросы? Мы всегда на связи и готовы помочь!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} />
                  </div>
                  <CardTitle className="text-white">Email</CardTitle>
                  <CardDescription className="text-white/80">info@eduplatform.ru</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} />
                  </div>
                  <CardTitle className="text-white">Телефон</CardTitle>
                  <CardDescription className="text-white/80">+7 (495) 123-45-67</CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <CardTitle className="text-white">Адрес</CardTitle>
                  <CardDescription className="text-white/80">Москва, ул. Примерная, 1</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="pt-8">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать нам
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="GraduationCap" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold font-heading">EduPlatform</span>
              </div>
              <p className="text-white/70">
                Образовательная платформа нового поколения
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Платформа</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Поддержка</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-heading">Соцсети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2024 EduPlatform. Все права защищены.</p>
          </div>
        </div>
      </footer>

      <Dialog open={videoDialogOpen} onOpenChange={setVideoDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Демо урок: Введение в веб-разработку</DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <video 
              className="w-full h-full" 
              controls
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
          <div className="space-y-4 pt-4">
            <h3 className="font-heading text-lg font-semibold">Описание урока</h3>
            <p className="text-foreground/70">
              В этом уроке вы познакомитесь с основами веб-разработки, узнаете о структуре HTML-документа 
              и создадите свою первую веб-страницу. Урок подходит для начинающих и не требует предварительных знаний.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary hover:bg-primary/90">
                <Icon name="PlayCircle" size={20} className="mr-2" />
                Продолжить курс
              </Button>
              <Button variant="outline">
                <Icon name="BookmarkPlus" size={20} className="mr-2" />
                Добавить в избранное
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
