pipeline {
  agent any
  stages {
    stage('Install Neos') {
      steps {
        sh '''php composer.phar install
pnpm install'''
      }
    }

    stage('Build Assets') {
      steps {
        sh 'pnpm build'
      }
    }

  }
}