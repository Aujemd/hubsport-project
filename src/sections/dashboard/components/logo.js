import * as React from "react"

function SvgComponent(props) {
    return (
        <svg
            width={220.175}
            height={100.41}
            viewBox="139.913 24.795 220.175 100.41"
            style={{
                background: "0 0",
            }}
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <defs>
                <filter
                    id="prefix__editing-raise"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                >
                    <feFlood floodColor="#ccc" result="flood-surface" />
                    <feFlood floodColor="#777" result="flood-extrude" />
                    <feMorphology in="SourceAlpha" radius={1} result="erode" />
                    <feConvolveMatrix
                        in="erode"
                        result="shadow"
                        order="11,8"
                        divisor={1}
                        kernelMatrix="0 0 0 1 1 1 1 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 1 0 0 0 0 0 0 1 1 0 1 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0"
                    />
                    <feOffset dy={4} in="shadow" result="offset" />
                    <feGaussianBlur in="offset" stdDeviation={0.2} result="blur" />
                    <feComposite
                        operator="in"
                        in="flood-extrude"
                        in2="blur"
                        result="extrude"
                    />
                    <feMorphology in="SourceAlpha" radius={1} result="erode2" />
                    <feConvolveMatrix
                        in="erode2"
                        result="out"
                        order="4,4"
                        divisor={1}
                        kernelMatrix="0 1 1 0 1 0 0 1 1 0 0 1 0 1 1 0"
                    />
                    <feComposite
                        operator="in"
                        in="flood-surface"
                        in2="out"
                        result="text"
                    />
                    <feMerge>
                        <feMergeNode in="extrude" />
                        <feMergeNode in="text" />
                    </feMerge>
                </filter>
            </defs>
            <g filter="url(#prefix__editing-raise)">
                <path d="M197.775 66.335v26.29h-3.16v-11.89h-12.75v11.89h-3.16v-26.29h3.16v11.55h12.75v-11.55h3.16zm21.22 6.52v19.77h-3.08v-3.43q-1.56 3.66-6.2 3.66-2.93 0-4.62-1.73-1.7-1.74-1.7-4.66v-13.61h3.08v12.83q0 2.14 1.09 3.27t3.26 1.13q2.16 0 3.63-1.71 1.46-1.72 1.46-4.64v-10.88h3.08zm14.68 2.49q-2.28 0-4.03 1.76-1.76 1.75-1.76 5.59 0 3.85 1.7 5.64 1.7 1.79 4.09 1.79 2.4 0 3.96-1.99 1.56-1.98 1.56-5.42 0-3.43-1.62-5.4-1.61-1.97-3.9-1.97zm-5.79 14.36v2.92h-3.08v-27.57h3.08v10.76q2.15-3.28 5.95-3.28 3.8 0 6.18 2.87t2.38 7.27q0 4.41-2.24 7.34-2.25 2.92-6.2 2.92-3.96 0-6.07-3.23zm34.4-4.06q0 3.47-2.38 5.36-2.38 1.89-6.32 1.89-3.94 0-6.82-1.67v-3.4q2.85 2.15 6.94 2.15 2.46 0 3.86-1.09 1.41-1.1 1.41-3.16 0-1.72-1.41-2.77-1.56-1.17-3.63-2.05-2.06-.88-2.94-1.34-.88-.47-2.09-1.37-2.26-1.79-2.26-5.05t2.4-5.15q2.4-1.89 5.91-1.89 3.51 0 5.89 1.21v3.31q-2.38-1.56-5.23-1.56-2.85 0-4.25 1.12-1.4 1.11-1.4 2.9 0 1.91 1.67 3.08 1.25.82 3.12 1.66 1.88.84 2.58 1.17.7.33 1.81 1.05t1.7 1.43q1.44 1.75 1.44 4.17zm13.96-10.3q-2.38 0-4.11 1.74-1.74 1.73-1.74 5.59 0 3.87 1.76 5.66 1.75 1.79 4.07 1.79 2.32 0 3.92-1.97 1.6-1.96 1.6-5.4 0-3.43-1.56-5.42-1.56-1.99-3.94-1.99zm-5.85 14.28v10.68h-3.04v-27.45h3.04v3q2.07-3.32 6.07-3.32 3.99 0 6.24 2.87 2.24 2.87 2.24 7.29 0 4.43-2.36 7.34-2.36 2.9-6.2 2.9-3.84 0-5.99-3.31zm27.26-14.32q-2.96 0-4.56 2.19-1.6 2.18-1.6 5.3 0 3.12 1.64 5.29 1.64 2.16 4.48 2.16 2.85 0 4.45-2.12 1.6-2.13 1.6-5.35 0-3.21-1.52-5.34t-4.49-2.13zm.04-2.73q4.29 0 6.73 2.89 2.44 2.89 2.44 7.31 0 4.43-2.5 7.31-2.5 2.89-6.8 2.89-4.31 0-6.79-2.87-2.48-2.86-2.48-7.25 0-4.39 2.56-7.33 2.55-2.95 6.84-2.95zm20.71 20.25q-5.85 0-5.85-5.97v-11.51h-3.16v-2.49h3.16v-4.92h3.08v4.92h5.46v2.49h-5.46v11.59q0 3.15 2.97 3.15 1.52 0 2.69-.89v2.92q-1.29.71-2.89.71z" />
            </g>
            <style />
        </svg>
    )
}

export default SvgComponent
