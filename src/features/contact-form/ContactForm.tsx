import { useState } from 'react';
import { Box, TextField, Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
    if (!formData.email.trim()) newErrors.email = 'Введите email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Некорректный email';
    if (!formData.subject.trim()) newErrors.subject = 'Выберите тему';
    if (!formData.message.trim()) newErrors.message = 'Введите сообщение';
    else if (formData.message.trim().length < 10) newErrors.message = 'Сообщение слишком короткое';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      <TextField
        label="Ваше имя"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        placeholder="Можно использовать псевдоним"
      />
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        placeholder="your@email.com"
      />
      <TextField
        label="Тема обращения"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        error={!!errors.subject}
        helperText={errors.subject}
        fullWidth
        placeholder="Например: вопрос о группах"
      />
      <TextField
        label="Сообщение"
        multiline
        rows={5}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        error={!!errors.message}
        helperText={errors.message}
        fullWidth
        placeholder="Опишите ваш вопрос или предложение..."
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        endIcon={<SendIcon />}
        sx={{ alignSelf: 'flex-start', mt: 1 }}
      >
        Отправить
      </Button>
    </Box>
  );
};
