# Copy this text into your `.bash` homework file. Copy and paste the code you successfully used into terminal below each prompt

# Open the **Terminal app**

# Create a new directory on your desktop called `galaxy_far_far_away`and enter it

mkdir galaxy_far_far_away && cd galaxy_far_far_away

# Create a directory called `death_star`

mkdir death_star

# and make the following files inside of it:
# darth_vader.txt
# princess_leia.txt
# storm_trooper.txt

touch death_star/darth_vader.txt death_star/princess_leia.txt death_star/storm_trooper.txt

# In `galaxy_far_far_away`, make a directory named `tatooine`

mkdir tatooine

# and create the following files in it:
# luke.txt
# ben_kenobi.txt

touch tatooine/luke.txt tatooine/ben_kenobi.txt && cd tatooine

# Inside of `tatooine` make a directory called `millenium_falcon`
# and in it create:
# han_solo.txt
# chewbaca.txt

mkdir millenium_falcon

touch millenium_falcon/han_solo.txt millenium_falcon/chewbaca.txt

# Rename `ben_kenobi.txt` to `obi_wan.txt

mv ben_kenobi.txt obi_wan.txt

# Copy `storm_trooper.txt` from `death_star` to `tatooine`

cp ../death_star/storm_trooper.txt .

# Move `luke.txt` and `obi_wan.txt` to the `millenium_falcon`

mv luke.txt obi_wan.txt millenium_falcon/

# Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`

mv millenium_falcon ../

# Move `millenium_falcon` into `death_star`

cd .. && mv millenium_falcon death_star/

# Move `princess_leia.txt` into the `millenium_falcon`

cd death_star && mv princess_leia.txt millenium_falcon/

# Delete `obi_wan.txt`

rm millenium_falcon/obi_wan.txt

# In `galaxy_far_far_away`, make a directory called `yavin_4`

cd .. && mkdir yavin_4

# Move the `millenium_falcon` out of the `death_star` and into `yavin_4`

mv death_star/millenium_falcon yavin_4/

# Make a directory in `yavin_4` called `x_wing`

mkdir yavin_4/x_wing

# Move `princess_leia.txt` to `yavin_4` and `luke.txt` to `x_wing`

mv yavin_4/millenium_falcon/princess_leia.txt yavin_4/ && mv yavin_4/millenium_falcon/luke.txt yavin_4/x_wing

# Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

mv yavin_4/millenium_falcon . && mv yavin_4/x_wing .

# In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

# Move `darth_vader.txt` into `tie_fighter_1`

# Make a copy of `storm_trooper.txt` in both `tie_fighter_2` and `tie_fighter_3`

# Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

# Be careful with this command - cannot undo!

# Make sure you delete the right thing, or you could accidentally delete the contents of your computer (it has happened).

# This command will typically not ask you if you really want to delete. It will just delete so doublecheck you are deleting exactly what you mean to delete

# Remove `tie_fighters` 2 and 3.

# Touch a file in "**x_wing**" called "**the_force.txt**".

# Destroy the "**death_star**" and anyone inside of it.

# Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".

# Celebrate!
