import {
  Box,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { Category, SubCategory } from "../../../data/categories";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  categories: Category[];
}

const MobileDrawer = ({ open, onClose, categories }: MobileDrawerProps) => {
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>({});

  const handleAccordionToggle = (slug: string) => {
    setExpandedPanels((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const renderMobileAccordion = (
    items: (Category | SubCategory)[],
    parentSlugs: string[] = []
  ) =>
    items.map((item) => {
      const hasChildren = !!item.children?.length;
      const isExpanded = !!expandedPanels[item.slug];
     const fullPath = [...parentSlugs, item.slug].join("/");

      if (!hasChildren) {
        return (
          <li key={item.slug}>
            <ListItemButton
              disableRipple
              component={Link}
              to={`/product/category/${fullPath}`}
              onClick={onClose}
              sx={{
                borderRadius: "8px",
                px: 2,
                py: 0.75,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "#D1FAE5",  
                },
                "& .MuiListItemText-primary": {
                  color: "#111827",
                  fontWeight: 500,
                  transition: "color 0.2s ease",
                },
                "&:hover .MuiListItemText-primary": {
                  color: "#10B981",            
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </li>
        );
      }
      return (
        <Accordion
          key={item.slug}
          expanded={isExpanded}
          onChange={() => handleAccordionToggle(item.slug)}
          disableGutters
          elevation={0}
          square
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: "bold", color: "#111827" }}>
              {item.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: 0 }}>
            <List disablePadding>
              {renderMobileAccordion(item.children!, [...parentSlugs, item.slug])}
            </List>
          </AccordionDetails>
        </Accordion>
      );
    });

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 280, p: 2 }} role="presentation">
        {renderMobileAccordion(categories)}
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
