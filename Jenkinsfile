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
          withCredentials([usernamePassword(credentialsId: 'ef3ab55f-3c36-40bc-b380-0381539096c9', usernameVariable: 'USERCODE', passwordVariable: 'PASSWORD')]) {
            sh 'echo $PASSWORD'
            sh 'npm start'
        }

      }
    }

    stage('send result mail') {
      steps {
        echo 'send mail'
      }
    }

  }
}
