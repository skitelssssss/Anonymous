import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShieldIcon from '@mui/icons-material/Shield';
import { Contact } from './model';

const iconMap: Record<string, React.ReactElement> = {
  info: <InfoIcon sx={{ fontSize: '1.5rem' }} />,
  support: <SupportAgentIcon sx={{ fontSize: '1.5rem' }} />,
  admission: <AdminPanelSettingsIcon sx={{ fontSize: '1.5rem' }} />,
  moderation: <ShieldIcon sx={{ fontSize: '1.5rem' }} />,
};

interface ContactCardProps {
  contact: Contact;
}

export const ContactCard = ({ contact }: ContactCardProps) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      <CardContent sx={{ p: 3, textAlign: 'center' }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '16px',
            bgcolor: `${theme.palette.primary.main}12`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 2,
            color: theme.palette.primary.main,
          }}
        >
          {iconMap[contact.icon]}
        </Box>
        <Typography variant="h5" sx={{ mb: 1, fontWeight: 600, fontSize: '1.05rem' }}>
          {contact.department}
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2, lineHeight: 1.7 }}>
          {contact.description}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <PhoneIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {contact.phone}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <EmailIcon sx={{ fontSize: '0.9rem', color: theme.palette.primary.main }} />
            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.8rem' }}>
              {contact.email}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
