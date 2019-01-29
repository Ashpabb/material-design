import * as React from 'react';
import TypographyComponent from '@material-ui/core/Typography';
import { Style } from './types';

export interface TypographyProps {
    /** @name Color @default TextPrimary */
    color?: TypographyColor;

    /** @name Align @default Left */
    align?: TypographyAlign;
    
    /** @name Gutter Bottom */
    gutterBottom?: boolean;
    variant?: Style;
}

export enum TypographyColor {
    Primary = 'primary',
    Secondary = 'secondary',
    TextPrimary = 'textPrimary',
    TextSecondary = 'textSecondary',
    Error = 'error',
    Default = 'default',
    Inherit = 'inherit'
}

export enum TypographyAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right',
    Justify = 'justify',
    Inherit = 'inherit'
}

/**
 * @name Typography
 * @icon Type
 */
export const Typography: React.SFC<TypographyProps> = props => {
    return (
        <TypographyComponent {...props}>
            {props.children}
        </TypographyComponent>
    )
}