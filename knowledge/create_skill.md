# Skill: Create New Knowledge File

This skill guides you through the process of creating a new "Skilled Knowledge" file for the repository.

## Goal
Create a markdown file in the `knowledge/` directory that defines a specific capability or knowledge domain.

## Steps

1.  **Identify the Skill Name**:
    - Choose a descriptive filename (e.g., `knowledge/docker_setup.md`).

2.  **Draft the Content**:
    - Follow the template: Title, Description, Instructions, Examples.

3.  **Submission**:
    - Create a **GitHub Issue** in this repository.
    - **Construct Link**: `{{Issue URL}}?template=new_skill.yml&title=Add+Skill:+[Skill+Name]&labels=new-skill`
    - **Title**: `Add Skill: [Skill Name]`
    - **Label**: `new-skill`
    - **Body**:
        - **File Path**: `knowledge/[filename].md`
        - **Content**: The full markdown content of the new skill.

    *Note: A generic GitHub Action will detect this issue and create a PR to add the file.*
