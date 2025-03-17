import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LeaderboardPage = () => {
    const leaderboardData = [
        { rank: 1, username: 'JohnDoe', score: 95, quiz: 'General Knowledge' },
        { rank: 2, username: 'JaneSmith', score: 90, quiz: 'Science Trivia' },
        { rank: 3, username: 'QuizMaster', score: 88, quiz: 'History Buff' },
        { rank: 4, username: 'PlayerOne', score: 85, quiz: 'Sports Mania' },
        { rank: 5, username: 'Brainiac', score: 80, quiz: 'Math Genius' }
    ];

    return (
        <div className="leaderboard-page">
            <Header />
            <h1 className="leaderboard-title">Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                        <th>Quiz Name</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((player) => (
                        <tr key={player.rank}>
                            <td>{player.rank}</td>
                            <td>{player.username}</td>
                            <td>{player.score}</td>
                            <td>{player.quiz}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Footer />
        </div>
    );
};

export default LeaderboardPage;
