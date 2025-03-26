import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const quizData = [
        {
        question: "What is 2 + 2?", 
        options: ["3", "4", "5", "6"], 
        answer: 1 
        },
        {
        question: "Which planet is closest to the Sun?", 
        options: ["Mars", "Venus", "Mercury", "Earth"], 
        answer: 2
        }
    ]

    const handleAnswer = (answer) => {
        if (quizData[currentQuestion]?.answer === answer) {
            alert("Right Answer");
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.questionContainer}>
                <Text style={styles.questionText}> {quizData[currentQuestion]?.question }</Text>
                { quizData[currentQuestion]?.options.map((item) => {
                    return <TouchableOpacity onPress={()=> handleAnswer(item)} style={styles.optionContainer}>
                            <Text style={styles.optionStyle}>{item}</Text>
                    </TouchableOpacity>
                },)}

            </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems: 'center', 
        justifyContent:'center',
    },
    questionContainer: {
        backgroundColor: '@ODDDDD', 
        padding: 10, 
        margin: 10, 
        borderRadius: 5,
    },
    optionStyle: {
        color: 'green', 
        padding: 5,
        alignSelf: 'center',
        fontSize: 18,
    },
    
    optionContainer: {
        borderColor: 'black', 
        borderWidth: 2, 
        marginTop:14,
        },
    questionText: {
        fontSize: 20, 
        fontWeight: 'bold', 
        textAlign: 'center',
    },
});
