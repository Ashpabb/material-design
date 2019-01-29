import * as React from 'react';
import CircularProgressComponent from '@material-ui/core/CircularProgress';

export interface ProgressProps {
    /** @name Color */
    color: ProgressColor;
}

export enum ProgressColor {
    Primary = 'primary',
    Secondary = 'secondary'
}

/**
 * @name Progress
 * @description Express an unspecified wait time or display the length of a process
 * @icon RotateCw
 */
export const Progress: React.SFC<ProgressProps> = props => {
    return (
        <CircularProgressComponent {...props} />
    )
}