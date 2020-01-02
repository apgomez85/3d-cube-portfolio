import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Read
      </Button>
      <Dialog
        fullWidth="true"
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          Coding, Meetups and Coffee
        </DialogTitle>
        <DialogContent>
          <img
            src={require("../../images/blog-pics/meetup_collage.png")}
            alt=""
            style={{
              width: 425,
              height: 300
            }}
          />
          <DialogContentText paragraph={true}>
            Southern California has many jobs in web development and thus has
            many people vying for the chance to take part of that world. This
            makes it easier to find other people with similar interests. Enter,
            Meetup. <br />
            <br />
            When I first started out, I was overwhelmed with the vast
            information and directions one can take. Seeking guidance, I
            attended a meetup and it was highly encouraging and helpful. Besides
            the helpful tips, on what I was learning at the time, it was
            motivating to see other people with a shared passion. I was more
            determined than ever to continue on this path.
            <br />
            <br />
            After several months, the owner of the meetup group was looking for
            additional hosts to expand over Orange County. I thought it was a
            great opportunity, both professional and personal, so I took it.
            Over the course of two years, there were many iterations and
            approaches I took to hosting this group. I started out with
            algorithms and coding challenges, thinking they were more important
            than they really were. I'm talking strictly for web development.
            They are necessary, but shouldn't be in the forefront of the
            learning process. But I would say they contributed to better
            participation and group work.
            <br />
            <br />
            After that I tried group projects trying to build a web app with a
            shared github. Now the thing you have to know about the meetup world
            is that attendance and repeat attendees are not exactly reliable. So
            needles to say, this was not very successful. There was on
            tic-tac-toe app that was completed between one other person and
            myself and that's it.
            <br />
            <br />
            Scrapping that idea, I tried short tutorials. Simple things like
            sending an email without a back end or how git works and how to use
            it. This worked fine, but some people were working with different
            languages or tech, while also being at different levels. Some are
            just barely dipping their toes in the water while others used
            frontend frameworks or spit out HTML from the backend. At this point
            I realized I wanted to help people who were struggling to figure
            things out, just like I was in the beginning.
            <br />
            <br />
            So finally, I settled on a discussion on web development for
            beginners. This opened it up for not only the people who are coming,
            but myself. Coming up with a formalized tutorial, while still
            learning myself was not easy. Especially since I was working long
            hours at my regular job. So it didn't allow ample time for both.
            This has been working out great. People come in with questions and I
            try my best to give them an answer and guidance. If I don't know, we
            would research it together. Over time, I've developed a good idea
            for the directions people can take and I try to advice people the
            best I can. If someone with more experience come to the meetup, they
            can share in their experience as well. We discuss our goals, tips
            and stories of how we got were we are. It is always humbling.
            <br />
            <br />
            I've met many people from different backgrounds and skills. There
            are days when I get a big group and it's non stop action and there
            are days that not one person attends. On those days, I would just
            use up the time to code myself. I would at times think about
            stopping just to work on my coding progress, but I keeep coming back
            to my beginnings and the struggles that came with it. There weren't
            too many, but always cherish the moments that I was able to help
            someone out. No matter how small or trivial. The world of web
            development can be a headache and abstract. Even if I just helped
            one person out, it would have been worth it.
            <br />
            <br />
            Oh and don't be that guy that RSVPs for a meetup and doesn't show
            up. It's not cool. :/
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
