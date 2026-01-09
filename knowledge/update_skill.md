# Skill: Update Knowledge File

This skill guides you through the process of updating an existing "Skilled Knowledge" file.

## Goal
Modify an existing file in `knowledge/` to improve accuracy, add new information, or fix errors.

## Steps

1.  **Read and Analyze**:
    - Read the existing file and determine necessary changes.

2.  **Draft Changes**:
    - Prepare the updated content.

3.  **Submission**:
    - Create a **GitHub Issue** in this repository.
    - **Construct Link**: `{{Issue URL}}?template=update_skill.yml&title=Update+Skill:+[Skill+Name]&labels=update-skill`
    - **Title**: `Update Skill: [Skill Name]`
    - **Label**: `update-skill`
    - **Body**:
        - **File Path**: `knowledge/[filename].md`
        - **New Content**: The fully updated content of the file.

    *Note: A generic GitHub Action will detect this issue and create a PR to update the file.*
