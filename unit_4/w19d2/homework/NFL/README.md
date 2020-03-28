![ga](/ga_cog.png)

# NFL

---
Title: NFL <br>
Type: Homework<br>
Modified by: Karolin Rafalski, Thom Page <br>
Competencies: Basic SQL<br>

---

### Schema and seed

You are provided with a schema file [schema.sql](nfl_seed_data/schema.sql) and two seed files (`players.sql` and `teams.sql`) that are all in the `nfl_seed_data` folder. Create a new database called `nfl` and use the schema and seed file to populate your database.

<hr>
:red_circle: "Commit: NFL db seeded"
<hr>

Record your answers to the following problems in a file called [nfl.sql](nfl.sql).

_Challenge_: Complete each part with a single SQL expression. That is
possible, but for some queries, it will involve learning how to use compound SQL expressions.

### Queries

Some queries may require more than one command (i.e. you may need to get information about a team before you can complete a query for players). Test each command in PSQL to make sure it is correct.

1.  List the names of all NFL teams
2.  List the stadium name and head coach of all NFC teams
3.  List the head coaches of the AFC South
4.  List the total number of players in the NFL

<hr>
:red_circle: "Commit: NFL queries 1"
<hr>

5.  Find the team names and head coaches of the NFC North and AFC East
6.  Find the 50 players with the highest salaries
7.  Find the average salary of all NFL players
8.  Find the names and positions of players with a salary above 10_000_000

<hr>
:red_circle: "Commit: NFL queries 2"
<hr>

9.  Find the player with the highest salary in the NFL
10. Find the name and position of the first 100 players with the lowest salaries
11. Find the average salary for a DE in the nfl

<hr>
:red_circle: "Commit: NFL queries 3"
<hr>

## Hungry For More

For these you will need to query two tables at the same time. In order to do some parts, you will need to research commands using dot notation that we did not cover in class.

EXAMPLE

> The names of all the players on the Buffalo Bills

```sql
SELECT players.name, teams.name
FROM players, teams
WHERE players.team_id=teams.id AND teams.name LIKE 'Buffalo Bills';
```

13. Find the total salary of all players on the New York Giants
14. Find the player with the lowest salary on the Green Bay Packers

<hr>
:red_circle: "Commit: NFL - HFM"
<hr>
