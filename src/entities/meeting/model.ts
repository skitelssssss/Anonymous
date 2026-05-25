export interface Meeting {
  id: string;
  title: string;
  description: string;
  dayOfWeek: string;
  time: string;
  timezone: string;
  type: 'online' | 'offline';
  topics: string[];
  chatLinks: { platform: string; url: string }[];
  location?: string;
  isBeginnerFriendly: boolean;
}

export const meetings: Meeting[] = [
  {
    id: '1',
    title: 'Утренняя надежда',
    description: 'Утренняя группа для тех, кто начинает свой день с поддержки. Разбираем темы принятия и само compassion.',
    dayOfWeek: 'Понедельник',
    time: '08:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Тревога', 'Принятие'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_morning_hope' },
      { platform: 'WhatsApp', url: '#' },
    ],
    isBeginnerFriendly: true,
  },
  {
    id: '2',
    title: 'Путь к выздоровлению',
    description: 'Работа по программе 12 шагов. Для участников с опытом прохождения программы.',
    dayOfWeek: 'Вторник',
    time: '19:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['12 шагов', 'Выздоровление'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_recovery_path' },
      { platform: 'GemSpace', url: '#' },
    ],
    isBeginnerFriendly: false,
  },
  {
    id: '3',
    title: 'Творческая мастерская',
    description: 'Арт-терапия и творческие практики как инструмент работы с депрессией. Рисуем, пишем, создаём.',
    dayOfWeek: 'Среда',
    time: '18:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Творчество', 'Арт-терапия'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_creative' },
      { platform: 'WhatsApp', url: '#' },
    ],
    isBeginnerFriendly: true,
  },
  {
    id: '4',
    title: 'Москва: Встреча у костра',
    description: 'Офлайн-встреча в центре Москвы. Обсуждаем темы одиночества и связи с окружающими.',
    dayOfWeek: 'Четверг',
    time: '18:30',
    timezone: 'MSK',
    type: 'offline',
    topics: ['Отношения', 'Одиночество'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_moscow' },
    ],
    location: 'Москва, ул. Тверская, д. 15, каб. 201',
    isBeginnerFriendly: true,
  },
  {
    id: '5',
    title: 'Биполярное расстройство',
    description: 'Специализированная группа для людей с БАР. Обсуждаем стратегии стабилизации настроения.',
    dayOfWeek: 'Пятница',
    time: '20:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['БАР', 'Настроение'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_bar_group' },
      { platform: 'GemSpace', url: '#' },
    ],
    isBeginnerFriendly: false,
  },
  {
    id: '6',
    title: 'Женский круг',
    description: 'Безопасное пространство для обсуждения тем, связанных с депрессией у женщин.',
    dayOfWeek: 'Суббота',
    time: '11:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Женские темы', 'Самооценка'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_women_circle' },
    ],
    isBeginnerFriendly: true,
  },
  {
    id: '7',
    title: 'Семья и созависимость',
    description: 'Для родственников и близких людей, живущих с депрессией. Учимся заботиться о себе.',
    dayOfWeek: 'Воскресенье',
    time: '16:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Созависимость', 'Семья'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_family' },
      { platform: 'WhatsApp', url: '#' },
    ],
    isBeginnerFriendly: true,
  },
  {
    id: '8',
    title: 'СПб: Невская надежда',
    description: 'Офлайн-встреча в Санкт-Петербурге на Невском проспекте.',
    dayOfWeek: 'Суббота',
    time: '14:00',
    timezone: 'MSK',
    type: 'offline',
    topics: ['Общая', 'Поддержка'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_spb' },
    ],
    location: 'Санкт-Петербург, Невский пр., д. 42',
    isBeginnerFriendly: true,
  },
  {
    id: '9',
    title: 'Медитация и осознанность',
    description: 'Практики mindfulness для снижения тревоги. Подходит для всех уровней.',
    dayOfWeek: 'Понедельник',
    time: '21:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Медитация', 'Осознанность', 'Тревога'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_mindfulness' },
    ],
    isBeginnerFriendly: true,
  },
  {
    id: '10',
    title: 'Работа и выгорание',
    description: 'Обсуждаем профессиональное выгорание, страхи перед работой и поиск баланса.',
    dayOfWeek: 'Среда',
    time: '20:00',
    timezone: 'MSK',
    type: 'online',
    topics: ['Выгорание', 'Работа'],
    chatLinks: [
      { platform: 'Telegram', url: 'https://t.me/da_work' },
      { platform: 'GemSpace', url: '#' },
    ],
    isBeginnerFriendly: true,
  },
];

export const daysOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

export const allTopics = [
  'Тревога',
  '12 шагов',
  'БАР',
  'Отношения',
  'Творчество',
  'Медитация',
  'Выгорание',
  'Семья',
  'Одиночество',
  'Самооценка',
  'Выздоровление',
  'Духовность',
  'Арт-терапия',
  'Осознанность',
  'Принятие',
  'Настроение',
  'Женские темы',
  'Созависимость',
  'Работа',
  'Общая',
  'Поддержка',
];
