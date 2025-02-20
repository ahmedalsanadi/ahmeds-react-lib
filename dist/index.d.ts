import React$1 from 'react';

type PageProps = {
    title: string;
    children: React.ReactNode;
};

declare const Page: React$1.FC<PageProps>;

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger" | "outline" | "text";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    /** Rename fullWidth to $fullWidth to mark it as transient */
    $fullWidth?: boolean;
    onClick?: () => void;
};

declare const Button: React$1.FC<ButtonProps>;

export { Button, Page };
