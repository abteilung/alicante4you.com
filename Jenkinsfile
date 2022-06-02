pipeline {
  agent any
  stages {
    stage('Install Neos') {
      steps {
        sh '''composer install
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