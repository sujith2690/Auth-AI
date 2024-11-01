// export const fadeIn = (direction, delay) => {
//     return {
//         hidden: {
//             y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
//             x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
//         },
//         show: {
//             y: 0,
//             x: 0,
//             opacity: 1,
//             transition: {
//                 type: 'tween',
//                 duration: 1.2,
//                 delay: delay,
//                 ease: [0.25, 0.25, 0.25, 0.75],
//             }
//         }
//     }
// }


export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
            x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
            scale: 0.95,  // Subtle scaling effect
        },
        show: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                type: 'spring',      // Using 'spring' for a more natural ease-in
                stiffness: 50,       // Controls how "bouncy" the motion is
                duration: 1.5,       // Slightly longer duration
                delay: delay,
                ease: [0.42, 0, 0.58, 1],  // Smooth custom cubic easing
            }
        }
    }
}
