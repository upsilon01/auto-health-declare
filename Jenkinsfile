pipeline {
  agent {
    docker {
      image 'buildkite/puppeteer'
    }

  }
  stages {
    stage('install dep') {
      steps {
        echo 'Installing..'
        sh 'npm i'
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