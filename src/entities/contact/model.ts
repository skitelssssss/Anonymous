export interface Contact {
  id: string;
  department: string;
  description: string;
  phone: string;
  email: string;
  icon: string;
}

export const contacts: Contact[] = [
  {
    id: '1',
    department: 'Справочная служба',
    description: 'Общая информация о группах, расписании и программе АД',
    phone: '+7 (495) 123-45-67',
    email: 'info@da-online.ru',
    icon: 'info',
  },
  {
    id: '2',
    department: 'Техническая поддержка',
    description: 'Помощь с сайтом, приложением и онлайн-собраниями',
    phone: '+7 (495) 765-43-21',
    email: 'support@da-online.ru',
    icon: 'support',
  },
  {
    id: '3',
    department: 'Приёмная комиссия',
    description: 'Вопросы о вступлении в группу и первичной консультации',
    phone: '+7 (495) 987-65-43',
    email: 'admission@da-online.ru',
    icon: 'admission',
  },
  {
    id: '4',
    department: 'Модерация',
    description: 'Жалобы, предложения по модерации групп и спикерских',
    phone: '+7 (495) 321-54-76',
    email: 'moderation@da-online.ru',
    icon: 'moderation',
  },
];
