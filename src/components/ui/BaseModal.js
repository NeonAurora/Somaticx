'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeColors } from '@/hooks/useThemeColor';
import { 
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Tab,
  Tabs,
  Stack,
  Button,
  Divider,
  Avatar,
  Chip
} from '@mui/material';
import { Close, ChevronRight } from '@mui/icons-material';

const TabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`modal-tabpanel-${index}`}
      aria-labelledby={`modal-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

const BaseModal = ({
  open,
  onClose,
  title,
  subtitle,
  category,
  categoryColor,
  icon: Icon,
  image,
  tabs = [],
  children,
  customContent,
  actions = [],
  maxWidth = "md",
  fullWidth = true,
  headerActions,
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState(0);
  
  const themeColors = useThemeColors({
    text: 'text.primary',
    textSecondary: 'text.secondary',
    surface: 'surface.primary',
    brand: 'brand.primary',
  });

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 50
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {open && (
        <Dialog
          open={open}
          onClose={onClose}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
          PaperProps={{
            style: { background: 'transparent', boxShadow: 'none' }
          }}
          BackdropProps={{
            style: { backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)' }
          }}
          {...props}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DialogContent
              sx={{
                p: 0,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 4,
                overflow: 'hidden'
              }}
            >
              {/* Header */}
              <Box
                sx={{
                  background: categoryColor 
                    ? `linear-gradient(135deg, ${categoryColor}20, ${categoryColor}40)`
                    : `linear-gradient(135deg, ${themeColors.brand}20, ${themeColors.brand}40)`,
                  p: 3,
                  position: 'relative'
                }}
              >
                {/* Close button */}
                <IconButton
                  onClick={onClose}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: themeColors.text,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <Close />
                </IconButton>

                {/* Header content */}
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    {Icon && (
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          backgroundColor: categoryColor || themeColors.brand,
                          color: 'white'
                        }}
                      >
                        <Icon sx={{ fontSize: 32 }} />
                      </Avatar>
                    )}
                    
                    <Box sx={{ flexGrow: 1, pt: 1 }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          color: themeColors.text,
                          mb: 1
                        }}
                      >
                        {title}
                      </Typography>
                      
                      {subtitle && (
                        <Typography
                          variant="h6"
                          sx={{
                            color: themeColors.textSecondary,
                            mb: 2
                          }}
                        >
                          {subtitle}
                        </Typography>
                      )}
                      
                      {category && (
                        <Chip
                          label={category}
                          sx={{
                            backgroundColor: categoryColor || themeColors.brand,
                            color: 'white',
                            fontWeight: 600
                          }}
                        />
                      )}
                    </Box>
                  </Stack>

                  {headerActions && (
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                      {headerActions}
                    </Stack>
                  )}
                </Stack>
              </Box>

              {/* Image */}
              {image && (
                <Box
                  sx={{
                    height: 200,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}
                />
              )}

              {/* Tabs */}
              {tabs.length > 0 && (
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs
                    value={currentTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      px: 3,
                      '& .MuiTab-root': {
                        color: themeColors.textSecondary,
                        textTransform: 'none',
                        fontWeight: 600,
                        '&.Mui-selected': {
                          color: categoryColor || themeColors.brand
                        }
                      },
                      '& .MuiTabs-indicator': {
                        backgroundColor: categoryColor || themeColors.brand
                      }
                    }}
                  >
                    {tabs.map((tab, index) => (
                      <Tab
                        key={index}
                        label={tab.label}
                        icon={tab.icon}
                        iconPosition="start"
                      />
                    ))}
                  </Tabs>
                </Box>
              )}

              {/* Content */}
              <Box sx={{ p: 3 }}>
                {tabs.length > 0 ? (
                  tabs.map((tab, index) => (
                    <TabPanel key={index} value={currentTab} index={index}>
                      {tab.content}
                    </TabPanel>
                  ))
                ) : (
                  <>
                    {customContent && customContent}
                    {children}
                  </>
                )}
              </Box>

              {/* Actions */}
              {actions.length > 0 && (
                <>
                  <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.12)' }} />
                  <Box sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} justifyContent="flex-end">
                      {actions.map((action, index) => (
                        <Button
                          key={index}
                          variant={action.variant || 'outlined'}
                          startIcon={action.icon}
                          onClick={action.onClick}
                          sx={{
                            textTransform: 'none',
                            fontWeight: 600,
                            borderRadius: 2,
                            ...(action.variant === 'contained' && {
                              backgroundColor: categoryColor || themeColors.brand,
                              '&:hover': {
                                backgroundColor: `${categoryColor || themeColors.brand}CC`
                              }
                            }),
                            ...(action.variant === 'outlined' && {
                              borderColor: categoryColor || themeColors.brand,
                              color: categoryColor || themeColors.brand,
                              '&:hover': {
                                borderColor: categoryColor || themeColors.brand,
                                backgroundColor: `${categoryColor || themeColors.brand}10`
                              }
                            })
                          }}
                        >
                          {action.text}
                        </Button>
                      ))}
                    </Stack>
                  </Box>
                </>
              )}
            </DialogContent>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default BaseModal;