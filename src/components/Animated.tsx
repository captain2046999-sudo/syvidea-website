"use client";

import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  class?: string;
  delay?: number;
  hoverScale?: number;
}

export function AnimatedCard({
  children,
  className = '',
  class: classProp = '',
  delay = 0,
  hoverScale = 1.02,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: hoverScale, y: -4 }}
      className={className || classProp}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  class?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  delay?: number;
}

export function AnimatedButton({
  children,
  className = '',
  class: classProp = '',
  onClick,
  type = 'button',
  delay = 0,
}: AnimatedButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={className || classProp}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
}

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  class?: string;
  delay?: number;
}

export function AnimatedText({
  children,
  className = '',
  class: classProp = '',
  delay = 0,
}: AnimatedTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={className || classProp}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  class?: string;
}

export function AnimatedSection({
  children,
  className = '',
  class: classProp = '',
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className || classProp}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  class?: string;
  delay?: number;
}

export function AnimatedImage({
  src,
  alt,
  className = '',
  class: classProp = '',
  delay = 0,
}: AnimatedImageProps) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className={className || classProp}
      src={src}
      alt={alt}
    />
  );
}

interface AnimatedLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  class?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export function AnimatedLink({
  children,
  href,
  className = '',
  class: classProp = '',
  target = '_self',
  rel = '',
  onClick,
}: AnimatedLinkProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={className || classProp}
    >
      {children}
    </motion.a>
  );
}

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  class?: string;
  glowColor?: 'purple' | 'cyan' | 'orange' | 'pink';
  delay?: number;
}

export function GlowingCard({
  children,
  className = '',
  class: classProp = '',
  glowColor = 'purple',
  delay = 0,
}: GlowingCardProps) {
  const glowColors = {
    purple: 'rgba(168, 85, 247, 0.5)',
    cyan: 'rgba(6, 182, 212, 0.5)',
    orange: 'rgba(249, 115, 22, 0.5)',
    pink: 'rgba(236, 72, 153, 0.5)',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        scale: 1.02,
        y: -4,
        boxShadow: `0 0 30px ${glowColors[glowColor]}, 0 0 60px ${glowColors[glowColor]}`,
      }}
      className={className || classProp}
    >
      {children}
    </motion.div>
  );
}