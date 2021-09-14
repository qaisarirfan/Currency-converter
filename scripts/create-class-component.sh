#!/usr/bin/env bash

componentDirectory="$(dirname "$0")/../src/$1/"
componentName=$2

directory="${componentDirectory}${componentName}"

if [ -z "$1" ]
    then
        echo "No component name supplied"
        exit 1
fi

echo "To change the templates edit the files at ./scripts/create-component-templates/"
echo "Adding component directory: ${directory}"

if [ -d "${directory}" ]
    then
        # Control will enter here if $DIRECTORY doesn't exist.
        echo "Component directory already exists"
        exit 1
fi

mkdir -p ${directory}
mkdir -p "${directory}/__tests__/"

echo "Creating scaffolding..."

sed "s/COMPONENT/${componentName}/g" "$(dirname "$0")/create-component-templates/class-component.js" > "${directory}/index.js"
sed "s/COMPONENT/${componentName}/g" "$(dirname "$0")/create-component-templates/story.js" > "${directory}/story.js"
sed "s/COMPONENT/${componentName}/g" "$(dirname "$0")/create-component-templates/styles.js" > "${directory}/styles.js"
sed "s/COMPONENT/${componentName}/g" "$(dirname "$0")/create-component-templates/test.js" > "${directory}/__tests__/index.js"

echo "Component created!"
