import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import {
    FIRST_DEPARTURE,
    MINUTES_IN_DAY,
    formatClock,
    formatWait,
    getNowInMinutes,
    getUpcoming,
    isClosed,
    parseClock,
} from './utils';

export const metadata: Metadata = {
    title: 'Next Metro',
};

export const dynamic = 'force-dynamic';

const UPCOMING_COUNT = 4;

// Rendered entirely on the server and refreshed with a meta tag, with inline styles,
// so it works on old browsers (e.g. Kindle) that can't run the app's JS or modern CSS.
const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        fontFamily: 'sans-serif',
        color: '#000',
        background: '#fff',
        textAlign: 'center',
    },
    title: { fontSize: 36, fontWeight: 'bold', margin: '0 0 24px' },
    label: { fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: '#555' },
    wait: { fontSize: 72, fontWeight: 'bold', margin: '8px 0' },
    at: { fontSize: 18, color: '#555' },
    list: { width: '100%', maxWidth: 320, margin: '32px auto 0', borderCollapse: 'collapse', border: '1px solid #999' },
    cell: { padding: '12px 16px', borderTop: '1px solid #999', textAlign: 'left' },
    now: { fontSize: 12, color: '#555', marginTop: 32 },
} satisfies Record<string, CSSProperties>;

type MetroPageProps = {
    searchParams: Promise<{ time?: string }>;
};

const MetroPage = async ({ searchParams }: MetroPageProps) => {
    // For testing: `?time=HH:MM` pretends it's that time; each refresh advances it by a minute.
    const simulated = parseClock((await searchParams).time);
    const now = simulated ?? getNowInMinutes();
    const closed = isClosed(now);

    // Reload at the start of the next minute, or when service resumes if closed.
    const minutesUntilRefresh = closed ? (FIRST_DEPARTURE - now + MINUTES_IN_DAY) % MINUTES_IN_DAY : 1;
    const secondsUntilRefresh =
        simulated === null ? minutesUntilRefresh * 60 - new Date().getSeconds() : minutesUntilRefresh * 60;
    const refreshUrl =
        simulated === null ? '' : `;url=/metro?time=${formatClock((now + minutesUntilRefresh) % MINUTES_IN_DAY)}`;

    const [next, ...later] = getUpcoming(now, UPCOMING_COUNT);

    return (
        <div style={styles.page}>
            <meta httpEquiv='refresh' content={`${secondsUntilRefresh}${refreshUrl}`} />
            <h1 style={styles.title}>😎</h1>
            {closed ? (
                <>
                    <div style={styles.label}>No more trains today</div>
                    <div style={styles.at}>First metro at {formatClock(FIRST_DEPARTURE)}</div>
                </>
            ) : (
                <>
                    <div style={styles.label}>Next metro in</div>
                    <div style={styles.wait}>{formatWait(next.waitMinutes)}</div>
                    <div style={styles.at}>at {formatClock(next.time)}</div>
                    <table style={styles.list}>
                        <tbody>
                            {later.map((d) => (
                                <tr key={d.time}>
                                    <td style={styles.cell}>{formatClock(d.time)}</td>
                                    <td style={{ ...styles.cell, textAlign: 'right', color: '#555' }}>
                                        in {formatWait(d.waitMinutes)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={styles.now}>Now {formatClock(now)}</div>
                </>
            )}
        </div>
    );
};

export default MetroPage;
