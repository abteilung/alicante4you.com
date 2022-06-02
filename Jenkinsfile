pipeline {
  agent any
  stages {
    stage('Install Neos') {
      steps {
        sh '''source /Users/abteilung/.zshrc
'''
        sh 'pnpm install'
        sh 'composer install'
      }
    }

    stage('Build Assets') {
      steps {
        sh 'pnpm build'
      }
    }

  }
}