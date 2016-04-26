#!/usr/bin/python
# Copyright 2010 Google Inc.
# Licensed under the Apache License, Version 2.0
# http://www.apache.org/licenses/LICENSE-2.0

# Google's Python Class
# http://code.google.com/edu/languages/google-python-class/

import sys
import re

"""Baby Names exercise

Define the extract_names() function below and change main()
to call it.

For writing regex, it's nice to include a copy of the target
text for inspiration.

Here's what the html looks like in the baby.html files:
...
<h3 align="center">Popularity in 1990</h3>
....
<tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>
<tr align="right"><td>2</td><td>Christopher</td><td>Ashley</td>
<tr align="right"><td>3</td><td>Matthew</td><td>Brittany</td>
...

Suggested milestones for incremental development:
 -Extract the year and print it
 -Extract the names and rank numbers and just print them
 -Get the names data into a dict and print it
 -Build the [year, 'name rank', ... ] list and print it
 -Fix main() to use the extract_names list
"""

def extract_names(filename):
  """
  Given a file name for baby.html, returns a list starting with the year string
  followed by the name-rank strings in alphabetical order.
  ['2006', 'Aaliyah 91', Aaron 57', 'Abagail 895', ' ...]
  """
  # +++your code here+++
  f = open(filename,"r")
  counter = 0
  year = None
  super_duper_list = []
  the_dict = {}
  for line in f.readlines():
    if re.match(".*Popularity in \d\d\d\d",line):
      year = re.search("\d{4}",re.match(".*Popularity in \d\d\d\d",line).group()).group()
      #~ print re.match("Popularity in \d\d\d\d",line)
      #~ <tr align="right"><td>1</td><td>Michael</td><td>Jessica</td>
      
    
    elif re.match("<tr align=\"right\"><td>\d*</td><td>\w*</td><td>\w*</td>",line):
      hit = re.search("(<td>)(\d*)(</td><td>)(\w*)(</td><td>)(\w*)",line)
      rank = hit.group(2) 
      mannen = hit.group(4)
      kvinnan = hit.group(6)
      the_dict[mannen] = rank
      the_dict[kvinnan] = rank
    
  super_duper_list.append(year)
  for key, value in the_dict.items():
    templol = "" + key + " " + value
    super_duper_list.append(templol)
  
  f.close()
  return sorted(super_duper_list)


def main():
  # This command-line parsing code is provided.
  # Make a list of command line arguments, omitting the [0] element
  # which is the script itself.
  args = sys.argv[1:]

  if not args:
    print 'usage: [--summaryfile] file [file ...]'
    sys.exit(1)

  # Notice the summary flag and remove it from args if it is present.
  summary = False
  if args[0] == '--summaryfile':
    summary = True
    del args[0]

  # +++your code here+++
  # For each filename, get the names, then either print the text output
  # or write it to a summary file
  tot_list = []
  for x in range(100):
    for arg in args:
      tot_list += extract_names(arg)
    
  print tot_list
  print len(tot_list)
    
  
if __name__ == '__main__':
  main()