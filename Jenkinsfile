pipeline {
  agent any
  stages {
    stage('Install Neos') {
      steps {
        sh '''#!/bin/bash
composer install
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