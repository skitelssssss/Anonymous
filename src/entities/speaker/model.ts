export interface Speaker {
  id: string;
  name: string;
  initials: string;
  title: string;
  description: string;
  topic: string;
  duration: string;
  avatarColor: string;
  date: string;
}

export const speakers: Speaker[] = [
  {
    id: '1',
    name: 'Анонимный спикер',
    initials: 'АС',
    title: 'Выход из изоляции',
    description: 'История о том, как я перестала прятаться от мира и начала искать помощь. Путь длиной в 3 года от полного отчаяния к первым лучам надежды.',
    topic: 'Выход из изоляции',
    duration: '32 мин',
    avatarColor: '#5C6BC0',
    date: '15 января 2025',
  },
  {
    id: '2',
    name: 'Анонимный спикер',
    initials: 'АН',
    title: 'Отношения после депрессии',
    description: 'Как депрессия разрушила мои отношения и как я учился строить их заново — с собой и с другими.',
    topic: 'Отношения',
    duration: '28 мин',
    avatarColor: '#81C784',
    date: '22 февраля 2025',
  },
  {
    id: '3',
    name: 'Анонимный спикер',
    initials: 'АМ',
    title: 'Духовный опыт выздоровления',
    description: 'О поиске смысла, высшей силы и о том, как 12 шагов изменили моё восприятие жизни.',
    topic: 'Духовность',
    duration: '45 мин',
    avatarColor: '#FFB74D',
    date: '10 марта 2025',
  },
  {
    id: '4',
    name: 'Анонимный спикер',
    initials: 'АК',
    title: 'БАР: жизнь в ритме',
    description: 'Мой опыт жизни с биполярным расстройством. О диагнозе, принятии и стратегиях, которые работают.',
    topic: 'БАР',
    duration: '38 мин',
    avatarColor: '#E57373',
    date: '5 апреля 2025',
  },
  {
    id: '5',
    name: 'Анонимный спикер',
    initials: 'АД',
    title: 'Творчество как терапия',
    description: 'Как рисование и музыка помогли мне пережить самый тёмный период. Практические советы для начинающих.',
    topic: 'Творчество',
    duration: '25 мин',
    avatarColor: '#BA68C8',
    date: '18 мая 2025',
  },
  {
    id: '6',
    name: 'Анонимный спикер',
    initials: 'АВ',
    title: 'Возвращение к жизни',
    description: 'История о том, как после 5 лет тяжёлой депрессии я нашёл силы начать всё заново.',
    topic: 'Выздоровление',
    duration: '41 мин',
    avatarColor: '#4DB6AC',
    date: '2 июня 2025',
  },
];

export const speakerTopics = [
  'Все темы',
  'Выход из изоляции',
  'Отношения',
  'Духовность',
  'БАР',
  'Творчество',
  'Выздоровление',
];
