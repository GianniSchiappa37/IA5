The bug was in containsNumbers, it for some reason treats " " as 0 which would return true when we would expect false
changes to the containsNumbers code was changed to fix that
