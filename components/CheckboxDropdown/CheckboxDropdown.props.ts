import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface CheckboxDropdownProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	options: string[];
	label: string;
	children: ReactNode;
	arrow?: 'top' | 'down' | 'none'
}