import { motion } from "framer-motion";
import type { FC } from "react";
import type { Category } from "../../../data/categories";
import { getMenuType } from "./utils/menuUtils";
import MegaMenuList from "./MegaMenuList";

interface MegaMenuProps {
  category: Category;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
  leftOffset?: number;
  menuLeft?: number;
}

const MegaMenu: FC<MegaMenuProps> = ({
  category,
  accentColor = "#10B981",
  bgColor = "white",
  textColor = "#374151",
  leftOffset,
  menuLeft,
}) => {
  if (!category.children) return null;
  const { isSingleCol, isSingleColLeaf} = getMenuType(category);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full z-50"
      style={{
        left: isSingleColLeaf ? menuLeft : isSingleCol ? leftOffset : 0,
        width: isSingleColLeaf ? "auto" : isSingleCol ? "auto" : "90%",
        display: isSingleColLeaf ? "flex" : "grid",
        flexDirection: isSingleColLeaf ? "column" : undefined,
        gridTemplateColumns: isSingleColLeaf
          ? undefined
          : isSingleCol
          ? "1fr"
          : `repeat(${Math.min(category.children.length, 3)}, minmax(150px, 1fr))`,
        gap: isSingleColLeaf ? "0.25rem" : isSingleCol ? "0.5rem" : "1.5rem",
        padding: isSingleColLeaf ? "0.25rem 0.5rem" : isSingleCol ? "0.5rem 1rem" : "2rem 5vw",
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: isSingleColLeaf ? "0.25rem" : undefined,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <MegaMenuList
        category={category}
        accentColor={accentColor}
          isSingleColLeaf={!!isSingleColLeaf}
        textColor={textColor}
      />
    </motion.div>
  );
};

export default MegaMenu;
