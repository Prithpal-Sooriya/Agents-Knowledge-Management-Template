# Agent Knowledge Management Template

This is a template repo for building out an agent management knowledge system.

## Workflow

This repo follows a RPEL (Research, Plan, Execute, Learn) workflow instead of the ReAct (Reason + Act) workflow.

ReAct is overhyped. It is an expensive loop (taken to the extreme we see the Ralph loop), which can be very well optimised by following a Spec Driven Development (SDD) + RPEL workflow.

- Research: Use tools, engineers, agents to understand the problem space.
- Plan: Generate a thorough plan (spec); break plans down into tasks and subtasks; understand tasks that can be execute in parallel vs sequential. Plan, re-plan, and plan again. The solid plan makes execution more accurate.
- Execute: Have multiple agents execute tasks in parallel or sequential. Use local agents and remote/cloud agents.
- Learn: Ensure that there is a reflection step inside the agent context. Agents can post updates for their working memory via github issues or separate PRs. Engineers can review and merge memory updates.


## Agent Knowledge Base

It takes the intention from Claude Skills and Claude Marketplace, but extends it to be more flexible for any agent models.

Claude skills are essentially a bunch of knowledge files to fill the initial context for agents.
Claude Marketplace is a collection of skills.

This repo is essentially the idea of building up specialised knowledge files for agents to use. The repo itself is the marketplace for skills.
You can use a router agent during planning to select the best skills for a given task.