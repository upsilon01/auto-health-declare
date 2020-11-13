pipeline {
    agent any

    stages {
        stage('install dep') {
            steps {
                echo 'Installing..'
                sh 'cd /etc/auto-health-declare && npm i'
            }
        }
        stage('run script') {
            steps {
                echo 'Running..'
                sh 'npm start'
            }
        }
        stage('send result mail') {
            steps {
                echo 'send mail'
            }
        }
    }
}