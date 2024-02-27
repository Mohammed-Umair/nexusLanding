import { ComponentProps } from '../../../utils/types';
import { DEFAULT_COLORS } from '../../../utils/colors';


const IconButton = ({ background = DEFAULT_COLORS.black, children, color = DEFAULT_COLORS.White, borderRadius = "50%", hover = true }: ComponentProps) => {
    return (
        <button style={{
            background: background,
            borderRadius: borderRadius,
            width: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: 'none',
            position: 'relative',
            height: '35px',
            fontFamily: 'SEN medium',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            color: color
        }} >
            <div className={hover === true ? 'ic' : ''} style={{
          
            borderRadius: borderRadius,
            width: '35px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            border: 'none',
            position: 'relative',
            height: '35px',
            fontFamily: 'SEN medium',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            color: color
        }}>
                {children}
            </div>

        </button>
    );
};

export default IconButton;
